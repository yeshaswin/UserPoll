import PollForm from "../components/AddPoll/PollForm";
import {useSelector,useDispatch} from "react-redux";
import {onAddPollClickHandler,onClosePollClickHandler,onSavePollClickHandler,onPollNameChangeHandler} from '../actions/AddPollActions.ts'
import PollsCard from "../components/ShowPolls/PollsCard";
function AdminPage() {
  const myState=useSelector((state)=>state.adminReducer)
  const dispatch=useDispatch();
  const AllPolls=JSON.parse(localStorage.getItem("all_polls")) 
  let modal_acvtive="modal "
  if(myState.showPollForm) modal_acvtive="modal is-active"
  else modal_acvtive="modal "
  
    return (
      <div>
        {AllPolls.map((poll,index)=>{
          return (
            <PollsCard poll={poll} key={index}></PollsCard>
          )
        })}
        <p>Admin Page</p>
       
       <div className={modal_acvtive}>
  <div className="modal-background"></div>
  <div className="modal-card">
    <header className="modal-card-head">
      {/* <p className="modal-card-title">Modal title</p> */}
      <input className="input is-primary modal-card-title" type="text" placeholder="Poll Label" value={myState.pollForm.label} onChange={(e)=>dispatch(onPollNameChangeHandler(e.target.value))}></input>

      <button className="delete" aria-label="close" onClick={()=>dispatch(onClosePollClickHandler())}></button>
    </header>
    <section className="modal-card-body">
     <PollForm/>
    </section>
    <footer className="modal-card-foot">
      <button className="button is-success" onClick={()=>dispatch(onSavePollClickHandler())}>Save changes</button>
      <button className="button" onClick={()=>dispatch(onClosePollClickHandler())}>Cancel</button>
    </footer>
  </div>
</div>
        <button className="button is-primary is-rounded" onClick={()=>dispatch(onAddPollClickHandler())} >+ Add Poll</button>
      </div>
    );
  }
  
  export default AdminPage;