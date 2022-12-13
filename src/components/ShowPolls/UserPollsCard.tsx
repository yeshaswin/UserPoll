import React from "react";
import { onUserViewPollClickHandler } from "../../actions/Actions"
import { useDispatch } from "react-redux";

const UserPollsCard = (props): JSX.Element => {
  const dispatch = useDispatch();
  const OpenPollHandler = (index) => {
    dispatch(onUserViewPollClickHandler(props.index))
  }

  return (
    <>
      <tr>
        <th>{props.poll.label}</th>
        <td>
          <button className="button is-primary  is-fullwidth" aria-label="more options" onClick={OpenPollHandler}>open
          </button>
        </td>
      </tr>
    </>

  )
}
export default UserPollsCard;