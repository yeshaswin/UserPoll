import React from "react";
import { useSelector, useDispatch } from "react-redux";
import UserPollsCard from "../components/ShowPolls/UserPollsCard";
import PollModal from "../components/ShowPolls/PollModal";
import LoginPage from './LoginPage';
import { Link } from "react-router-dom";
import { onLogout } from './../actions/Actions';
import { RootState } from "store";
const UserPage = (): JSX.Element => {
  const myState = useSelector((state: RootState) => state.Reducer)
  // const AdminState = useSelector((state) => state.adminReducer)
  // const LoginState = useSelector((state) => state.LoginReducer)
  // let currentUser = JSON.parse(localStorage.getItem("all_users"))[LoginState.currentUser]
  let currentUser = myState.users[myState.currentUser]
  const AllPolls = myState.Adminpolls
  const dispatch = useDispatch()

  const onUserLogout = () => {
    dispatch(onLogout())
  }
  return (
    <div >
      <nav className="navbar " role="navigation" aria-label="main navigation">
        <ul className="navbar-menu">

          <li className="navbar-item navbar-end">
            <Link to="/login" onClick={onUserLogout}>Logout</Link>
          </li>

        </ul>
      </nav>
      {((myState.currentUser !== -1)) ? <section className="hero is-light is-fullheight">
        <p className="title is-1">welcome {currentUser.userName}</p>

        <div className="hero-body">

          <div className="container">
            <div className="columns is-centered">
              <div className="column  is-10-desktop ">
                <div>
                  <p className="title is-3">Live Polls</p>

                  <table className="table">
                    <thead>
                      <tr>
                        <th>Poll</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        AllPolls ? AllPolls.map((poll, index) => {

                          return (
                            (!poll.closed && !(currentUser.submittedPolls.includes(index))) && <UserPollsCard poll={poll} key={index} index={index} ></UserPollsCard>
                          )
                        }) : <p> No Live Polls</p>
                      }

                    </tbody>
                  </table>
                  {
                    AllPolls && <PollModal myState={myState} AllPolls={AllPolls} currentUser={currentUser} ></PollModal>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> : <LoginPage></LoginPage>}


    </div>
  );
}

export default UserPage;

