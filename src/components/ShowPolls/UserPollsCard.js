import { onUserViewPollClickHandler } from "../../actions/PollResponseActions.ts"
import {  useDispatch } from "react-redux";

const UserPollsCard=(props)=> {
  const dispatch = useDispatch();
  const OpenPollHandler=(index)=> {
    dispatch(onUserViewPollClickHandler(props.index))
  }

  return (
    <>
      <div className="card" style={{ width: '12rem', display: 'inline-block', margin: '2rem' }}>
        <header className="card-header">
          <p className="card-header-title">
            {props.poll.label}
          </p>
          <button className="card-header-icon" aria-label="more options" onClick={OpenPollHandler}>open
          </button>
        </header>
      </div>
    </>

  )
}
export default UserPollsCard;