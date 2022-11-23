import { useSelector, useDispatch } from "react-redux";
import UserPollsCard from "../components/ShowPolls/UserPollsCard";
import { onUserSavePollClickHandler, onUserClosePollClickHandler, onUserSelectOptionHandler } from "../actions/PollResponseActions.ts"
function UserPage() {
  const myState = useSelector((state) => state.UserReducer)

  const AllPolls = JSON.parse(localStorage.getItem("all_polls"))
  let modal_acvtive = "modal "
  if (myState.showPollForm) modal_acvtive = "modal is-active"
  else modal_acvtive = "modal "
  const dispatch = useDispatch();
  return (
    <div >
      <p>User page</p>
      <div>
        <h1>open polls</h1> {AllPolls?.map((poll, index) => {
          return (
            poll.closed ? '' : <UserPollsCard poll={poll} key={index} index={index} ></UserPollsCard>

          )
        })}
      </div>
      <div className={modal_acvtive}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            {/* <p className="modal-card-title">Modal title</p> */}
            <p className="card-header-title">
              {
                // console.log(myState.currentPoll)
                AllPolls[myState.currentPoll].label
              }      </p>
            <button className="delete" aria-label="close" onClick={() => dispatch(onUserClosePollClickHandler())}></button>
          </header>
          <section className="modal-card-body">
       
              {
                AllPolls[myState.currentPoll].questions.map((question, questionindex) => {
                  <p>{question.label}</p>
                  return (
                    <div key={questionindex}>
                      <p>{question.label}</p>
                      {
                        question.options.map((option, optionindex) => {
                          return (
                            <div key={optionindex}>
                              <div className="control">
                                <label className="radio">
                                  <input type="radio" name={questionindex} onChange={()=>dispatch(onUserSelectOptionHandler(questionindex,optionindex))}></input>
                                    {option.value}
                                </label>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  )
                })
              }
             </section>
 
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={() => dispatch(onUserSavePollClickHandler())}>Save changes</button>
            <button className="button" onClick={() => dispatch(onUserClosePollClickHandler())}>Cancel</button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default UserPage;

