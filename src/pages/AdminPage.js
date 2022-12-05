import PollForm from "../components/AddPoll/PollForm";
import { useSelector, useDispatch } from "react-redux";
import { onAddPollClickHandler, onClosePollClickHandler, onSavePollClickHandler, onPollNameChangeHandler } from '../actions/AddPollActions.ts'
import PollsCard from "../components/ShowPolls/AdminPollsCard";
import LoginPage from "./LoginPage";
import { Link } from "react-router-dom";
import { onLogout } from './../actions/LoginActions.ts';
const AdminPage=() =>{
  const myState = useSelector((state) => state.adminReducer)
  const LoginState = useSelector((state) => state.LoginReducer)
  // let currentUser = JSON.parse(localStorage.getItem("all_users"))[LoginState.currentUser]
  let currentUser = LoginState.users[LoginState.currentUser]

  const dispatch = useDispatch();
  // const AllPolls = JSON.parse(localStorage.getItem("all_polls"))
  const AllPolls = myState.polls
  let modal_acvtive = "modal "
  if (myState.showPollForm) modal_acvtive = "modal is-active"
  else modal_acvtive = "modal "
  const AddPollHandler=() =>{
    dispatch(onAddPollClickHandler())
  }
  const ClosePollHandler=() =>{
    dispatch(onClosePollClickHandler())
  }
  const SavePollHandler=(e) =>{
    e.preventDefault();
    dispatch(onSavePollClickHandler())
  }
  const onUserLogout=()=>{
    dispatch(onLogout())
  }
  return (
    <div>
                  <nav className="navbar " role="navigation" aria-label="main navigation">
        <ul className="navbar-menu">
          <li className="navbar-item navbar-end">
            <Link to="/login" onClick={onUserLogout}>Logout</Link>
          </li>

        </ul>
      </nav>
      {((LoginState.currentUser!==-1)&&(currentUser.type==="Admin"))?<section className="hero is-light is-fullheight">
        <p className="title is-1">Welcome</p>

        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-10-desktop ">
                <>
                  <div>
                  <p className="title is-3">Live Polls</p>
                    {AllPolls?AllPolls.map((poll, index) => {
                      return (
                        !poll.closed && <PollsCard poll={poll} key={index} index={index} myState={myState}></PollsCard>

                      )
                    }):<p> No Live Polls</p>
                    }</div>
                  <p className="title is-3">Closed Polls</p>
                  {AllPolls?.map((poll, index) => {
                    return (
                      poll.closed && <PollsCard poll={poll} key={index} index={index} myState={myState} ></PollsCard>

                    )
                  })}
                <form onSubmit={(e)=>SavePollHandler(e)} >

                  <div className={modal_acvtive}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
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
                   
                    </div>
                  </div>
                  </form>
                </>
              </div>
            </div>
            <button className="button is-primary is-rounded is-pulled-right" onClick={AddPollHandler} data-testid="AddpollBtn">+ Add Poll</button>
          </div>
        </div>

      </section>:<LoginPage></LoginPage>}

    </div>
  );
}

export default AdminPage;