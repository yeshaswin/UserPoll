import { useSelector } from "react-redux";
import UserPollsCard from "../components/ShowPolls/UserPollsCard";
import PollModal from "../components/ShowPolls/PollModal";
import LoginPage from './LoginPage';
function UserPage() {
  const myState = useSelector((state) => state.UserReducer)
  const LoginState = useSelector((state) => state.LoginReducer)
  let currentUser = JSON.parse(localStorage.getItem("all_users"))[LoginState.currentUser]
  const AllPolls = JSON.parse(localStorage.getItem("all_polls"))

  return (
    <div >
      {((LoginState.currentUser!==-1))?<section className="hero is-light is-fullheight">
        <p className="title is-1">welcome {currentUser.userName}</p>

        <div className="hero-body">

          <div className="container">
            <div className="columns is-centered">
              <div className="column  is-10-desktop ">
                <div>
                  <p className="title is-3">Live Polls</p>
                  {
                    AllPolls?.map((poll, index) => {

                      return (
                        (!poll.closed && !(currentUser.submittedPolls.includes(index))) && <UserPollsCard poll={poll} key={index} index={index} ></UserPollsCard>
                      )
                    })
                  }
                  {
                    AllPolls&&<PollModal myState={myState} AllPolls={AllPolls} currentUser={currentUser} LoginState={LoginState}></PollModal>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>:<LoginPage></LoginPage>}


    </div>
  );
}

export default UserPage;

