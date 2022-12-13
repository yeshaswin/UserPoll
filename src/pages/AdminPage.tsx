import React from "react";
import PollForm from "../components/AddPoll/PollForm";
import { useSelector, useDispatch } from "react-redux";
import { onAddPollClickHandler, onClosePollClickHandler, onSavePollClickHandler, onPollNameChangeHandler } from '../actions/Actions'
import AdminPollsCard from "../components/ShowPolls/AdminPollsCard";
import LoginPage from "./LoginPage";
import { Link } from "react-router-dom";
import { onLogout } from './../actions/Actions';
import { RootState } from "store";
import { ToastContainer, toast } from 'react-toastify';

const AdminPage = (): JSX.Element => {
  const myState = useSelector((state: RootState) => state.Reducer)
  const dispatch = useDispatch();
  const AllPolls = myState.Adminpolls
  let modal_acvtive = "modal "
  if (myState.AdminshowPollForm) modal_acvtive = "modal is-active"
  else modal_acvtive = "modal "
  const AddPollHandler = () => {
    dispatch(onAddPollClickHandler())
  }
  const ClosePollHandler = () => {
    dispatch(onClosePollClickHandler())
  }
  const SavePollHandler = (e) => {
    e.preventDefault();
    dispatch(onSavePollClickHandler())
    toast("POLL SAVED")

  }
  const onUserLogout = () => {
    dispatch(onLogout())
  }
  return (
    <div>
      <ToastContainer />

      <nav className="navbar  is-fixed-top" role="navigation" aria-label="main navigation">
        <ul className="navbar-menu">
          <li className="navbar-item navbar-end">
            <Link to="/login" onClick={onUserLogout}>Logout</Link>
          </li>

        </ul>
      </nav>
      {((myState.currentUser !== -1) && (myState.userType === "Admin")) ? <section className="hero is-light is-fullheight">
        <p className="title is-1">Welcome</p>

        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-10-desktop ">
                <>
                  <p className="title is-3">Polls</p>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Poll</th>
                        <th>Stats</th>
                        <th>Close</th>
                      </tr>
                    </thead>
                    <tbody>
                      {AllPolls ? AllPolls.map((poll, index) => {
                        return (
                          <AdminPollsCard poll={poll} key={index} index={index} myState={myState}></AdminPollsCard>

                        )
                      }) : <p> No Live Polls</p>
                      }

                    </tbody>
                  </table>
                  <form onSubmit={(e) => SavePollHandler(e)} >

                    <div className={modal_acvtive}>
                      <div className="modal-background"></div>
                      <div className="modal-card">
                        <header className="modal-card-head">
                          <input className="input  modal-card-title" type="text" placeholder="Poll Label" required value={myState.AdminpollForm.label} name="pollLabel" onChange={(e) => dispatch(onPollNameChangeHandler(e.target.value))}></input>

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

      </section> : <LoginPage></LoginPage>}

    </div>
  );
}

export default AdminPage;