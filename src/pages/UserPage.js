import { useSelector } from "react-redux";
import UserPollsCard from "../components/ShowPolls/UserPollsCard";
import PollModal from "../components/ShowPolls/PollModal";
function UserPage() {
  const myState = useSelector((state) => state.UserReducer)
  const LoginState = useSelector((state) => state.LoginReducer)
  let currentUser = JSON.parse(localStorage.getItem("all_users"))[LoginState.currentUser]
  const AllPolls = JSON.parse(localStorage.getItem("all_polls"))
  return (
    <div >
      <p>User page</p>
      <p>welcome {currentUser.userName}</p>
      <div>
        <h1>open polls</h1>
        {AllPolls?.map((poll, index) => {

          return (
            (!poll.closed && !(currentUser.submittedPolls.includes(index))) && <UserPollsCard poll={poll} key={index} index={index} ></UserPollsCard>
          )
        })}
        <PollModal myState={myState} AllPolls={AllPolls} currentUser={currentUser} LoginState={LoginState}></PollModal>
      </div>

    </div>
  );
}

export default UserPage;

