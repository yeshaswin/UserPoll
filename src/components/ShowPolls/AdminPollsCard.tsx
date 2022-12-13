import React from "react";
import { onClosePollHandler, onShowChartHandler } from "../../actions/Actions";
import { useDispatch } from 'react-redux'
import Chart from "./Charts";
import { ToastContainer, toast } from 'react-toastify';

const AdminPollsCard = (props): JSX.Element => {
  const dispatch = useDispatch();
  let modal_acvtive = "modal "
  if (props.myState.showChart) {
    modal_acvtive = "modal is-active"
  }
  else { modal_acvtive = "modal " }
  const ClosePollHandler = () => {
    dispatch(onClosePollHandler(props.index))
    toast("POLL CLOSED")

  }
  const ShowChartHandler = (value) => {
    dispatch(onShowChartHandler(value, props.index))
  }
  return (
    <>
      <ToastContainer />

      {(props.index === props.myState.AdminCurrentPoll) && <div className={modal_acvtive}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">
              {props.poll.label}
            </p>
            <button className="delete" aria-label="close" onClick={() => ShowChartHandler(false)}></button>
          </header>
          <section className="modal-card-body">
            <Chart poll={props.poll} ></Chart>
          </section>
        </div>
      </div>}
      <tr>
        <th>{props.poll.label}</th>
        <td>
          <button className="button is-primary  is-fullwidth" onClick={() => ShowChartHandler(true)} >Stats</button>
        </td>
        <td>
          <button className="button is-danger  is-fullwidth " onClick={ClosePollHandler} disabled={props.poll.closed}> Close Poll</button>
        </td>
      </tr>
    </>
  )
}
export default AdminPollsCard;