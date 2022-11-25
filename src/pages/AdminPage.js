import PollForm from "../components/AddPoll/PollForm";
import { useSelector, useDispatch } from "react-redux";
import { onAddPollClickHandler, onClosePollClickHandler, onSavePollClickHandler, onPollNameChangeHandler } from '../actions/AddPollActions.ts'
import PollsCard from "../components/ShowPolls/AdminPollsCard";
function AdminPage() {
  const myState = useSelector((state) => state.adminReducer)
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
  function SavePollHandler() {
    dispatch(onSavePollClickHandler())
  }
  return (
    <div>
      <h1>Admin Page</h1>
      <div>
        <h1>open polls</h1> {AllPolls?.map((poll, index) => {
          return (
            !poll.closed && <PollsCard poll={poll} key={index} index={index}></PollsCard>

          )
        })}</div>
      <h1>Closed POll</h1>
      {AllPolls?.map((poll, index) => {
        return (
          poll.closed && <PollsCard poll={poll} key={index} index={index}></PollsCard>

        )
      })}

      <div className={modal_acvtive}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <input className="input is-primary modal-card-title" type="text" placeholder="Poll Label" value={myState.pollForm.label} onChange={(e) => dispatch(onPollNameChangeHandler(e.target.value))}></input>

            <button className="delete" aria-label="close" onClick={ClosePollHandler}></button>
          </header>
          <section className="modal-card-body">
            <PollForm />
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={SavePollHandler}>Save changes</button>
            <button className="button" onClick={ClosePollHandler}>Cancel</button>
          </footer>
        </div>
      </div>
      <button className="button is-primary is-rounded" onClick={AddPollHandler} >+ Add Poll</button>
    </div>
  );
}

export default AdminPage;