import PollForm from "../components/AddPoll/PollForm";
import {useSelector,useDispatch} from "react-redux";
import {onAddPollClickHandler} from '../actions/AddPollActions.ts'

function AdminPage() {
  const myState=useSelector((state)=>state.adminReducer)
  const dispatch=useDispatch();
  console.log(myState)

    return (
      <div >
        <p>Admin Page</p>
        {myState.showPollForm && <PollForm/>}
        <button className="button is-primary is-rounded" onClick={()=>dispatch(onAddPollClickHandler())} >+ Add Poll</button>
      </div>
    );
  }
  
  export default AdminPage;