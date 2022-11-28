import PollForm from "../components/AddPoll/PollForm";
import { useSelector, useDispatch } from "react-redux";
import { onAddPollClickHandler, onClosePollClickHandler, onSavePollClickHandler, onPollNameChangeHandler } from '../actions/AddPollActions.ts'
import PollsCard from "../components/ShowPolls/AdminPollsCard";
import LoginPage from "./LoginPage";
function AdminPage() {
  const myState = useSelector((state) => state.adminReducer)
  const LoginState = useSelector((state) => state.LoginReducer)
  let currentUser = JSON.parse(localStorage.getItem("all_users"))[LoginState.currentUser]
  const dispatch = useDispatch();
  const AllPolls = JSON.parse(localStorage.getItem("all_polls"))
  let modal_acvtive = "modal "
  if (myState.showPollForm) modal_acvtive = "modal is-active"
  else modal_acvtive = "modal "
  function AddPollHandler() {
    dispatch(onAddPollClickHandler())
  }
  function ClosePollHandler() {
    dispatch(onClosePollClickHandler())
  }
  function SavePollHandler(e) {
    e.preventDefault();
    dispatch(onSavePollClickHandler())
  }
  return (
    <div>
      {((LoginState.currentUser!==-1)&&(currentUser.type==="Admin"))?<section className="hero is-light is-fullheight">
        <p className="title is-1">Welcome</p>

        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-10-desktop ">
                <>
                  <div>
                  <p className="title is-3">Live Polls</p>
                    {AllPolls?.map((poll, index) => {
                      return (
                        !poll.closed && <PollsCard poll={poll} key={index} index={index} myState={myState}></PollsCard>

                      )
                    })}</div>
                  <p className="title is-3">Closed Polls</p>
                  {AllPolls?.map((poll, index) => {
                    return (
                      poll.closed && <PollsCard poll={poll} key={index} index={index} myState={myState} ></PollsCard>

                    )
                  })}

                  <div className={modal_acvtive}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                      <form onSubmit={(e)=>SavePollHandler(e)} >
                        <header className="modal-card-head">
                          <input className="input  modal-card-title" type="text" placeholder="Poll Label" required value={myState.pollForm.label} name="pollLabel" onChange={(e) => dispatch(onPollNameChangeHandler(e.target.value))}></input>

                          <button className="delete" aria-label="close" onClick={ClosePollHandler}></button>
                        </header>
                        <section className="modal-card-body">
                          <PollForm />
                        </section>
                        <footer className="modal-card-foot">
                          <input className="button is-success" type="submit" value="Create Poll"></input>
                          <button className="button" onClick={ClosePollHandler}>Cancel</button>
                        </footer>
                      </form>
                    </div>
                  </div>
                </>
              </div>
            </div>
            <button className="button is-primary is-rounded is-pulled-right" onClick={AddPollHandler} >+ Add Poll</button>
          </div>
        </div>

      </section>:<LoginPage></LoginPage>}

    </div>
  );
}

export default AdminPage;