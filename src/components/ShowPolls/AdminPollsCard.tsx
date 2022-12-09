import React from "react";
import { onClosePollHandler, onShowChartHandler } from "../../actions/Actions";
import { useDispatch } from 'react-redux'
import Chart from "./Charts";
const AdminPollsCard = (props): JSX.Element => {
  const dispatch = useDispatch();
  let modal_acvtive = "modal "
  if (props.myState.showChart) {
    modal_acvtive = "modal is-active"
  }

  else { modal_acvtive = "modal " }
  let showStatsButtonStyle = 'none'
  let closePollButtonStyle = 'block'
  if (props.poll.closed) {
    showStatsButtonStyle = 'block'
    closePollButtonStyle = 'none'
  }
  else {
    showStatsButtonStyle = 'none'
    closePollButtonStyle = 'block'
  }
  const ClosePollHandler = () => {
    dispatch(onClosePollHandler(props.index))
  }
  const ShowChartHandler = (value) => {
    dispatch(onShowChartHandler(value, props.index))
  }
  return (
    <>

      <div className="card" style={{ width: '12rem', display: 'inline-block', margin: '2rem' }}>
        <header className="card-header ">
          <p className="card-header-title">

            {props.poll.label}



          </p>

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
        </header>
        <button className="button is-primary  is-fullwidth" onClick={() => ShowChartHandler(true)} style={{ display: showStatsButtonStyle }}>Stats</button>
        <button className="button is-danger  is-fullwidth " onClick={ClosePollHandler} style={{ display: closePollButtonStyle }}> Close Poll</button>        <footer className="card-footer">

        </footer>
      </div>
    </>
  )
}
export default AdminPollsCard;