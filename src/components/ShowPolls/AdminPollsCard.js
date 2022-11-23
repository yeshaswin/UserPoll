import { onClosePollHandler } from "../../actions/AddPollActions.ts";
import {useDispatch} from 'react-redux'
function AdminPollsCard(props){
    const dispatch=useDispatch();
    return(
        <>
       
         <div className="card" style={{width:'12rem',display:'inline-block',margin:'2rem'}}>
  <header className="card-header">
    <p className="card-header-title">
        {props.poll.label}
    </p>
    <button className="card-header-icon" aria-label="more options">
      <span className="icon">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div className="card-content">
    <div className="content">

    </div>
  </div>
  <footer className="card-footer">
    <button className="card-footer-item" onClick={()=>dispatch(onClosePollHandler(props.index))}> Close Poll</button> 
  </footer>
</div>
        </>
    )
}
export default AdminPollsCard;