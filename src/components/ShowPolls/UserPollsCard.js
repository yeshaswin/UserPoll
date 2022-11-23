import { onUserSavePollClickHandler, onUserClosePollClickHandler, onUserViewPollClickHandler,onUserSelectOptionHandler } from "../../actions/PollResponseActions.ts"
import { useSelector, useDispatch } from "react-redux";

function UserPollsCard(props){
  const dispatch = useDispatch();

    return(
        <>
          <div className="card" style={{width:'12rem',display:'inline-block',margin:'2rem'}}>
  <header className="card-header">
    <p className="card-header-title">
        {props.poll.label}
    </p>
    <button className="card-header-icon" aria-label="more options" onClick={() => dispatch(onUserViewPollClickHandler(props.index))}>open
    </button>
  </header>
</div>
        </>

    )
}
export default UserPollsCard;