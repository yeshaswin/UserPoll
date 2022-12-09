import React from 'react';
import { useDispatch } from 'react-redux'
import { onUserSavePollClickHandler, onUserClosePollClickHandler, onUserSelectOptionHandler } from "../../actions/Actions"

const PollModal = (props): JSX.Element => {
    const dispatch = useDispatch();

    const OptionChangeHandler = (questionindex, optionindex) => {
        dispatch(onUserSelectOptionHandler(questionindex, optionindex))
    }
    const SavePollHandler = (e) => {
        e.preventDefault();
        dispatch(onUserSavePollClickHandler(props.myState.currentUser))

    }
    const ClosePollHandler = () => {
        dispatch(onUserClosePollClickHandler())
    }
    let modal_acvtive = "modal "
    if (props.myState.UsershowPollForm) {
        modal_acvtive = "modal is-active"
    }

    else { modal_acvtive = "modal " }

    return (
        <>
            <div className={modal_acvtive}>
                <div className="modal-background"></div>
                <form onSubmit={(e) => SavePollHandler(e)}>
                    {
                        props.AllPolls.map((poll, pollindex) => {
                            return (
                                (pollindex === props.myState.UserCurrentPoll) && <div key={pollindex}>


                                    <div className="modal-card">
                                        <header className="modal-card-head">
                                            <p className="card-header-title">
                                                {poll.label}
                                            </p>
                                        </header>
                                        <section className="modal-card-body">
                                            {
                                                poll.questions.map((question, questionindex) => {
                                                    return (
                                                        <div key={questionindex}>
                                                            <p>{question.label}</p>

                                                            {
                                                                question.options.map((option, optionindex) => {
                                                                    return (
                                                                        <div key={optionindex}>
                                                                            <div className="control" onChange={() => OptionChangeHandler(questionindex, optionindex)}>
                                                                                <label className="radio">
                                                                                    <input type="radio" name={String(pollindex) + String(questionindex)} required></input>
                                                                                    {option.value}

                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </section>

                                        <footer className="modal-card-foot">
                                            <input className="button is-success" type='submit' value='Submit Poll'></input>
                                            <button className="button" onClick={ClosePollHandler}>Cancel</button>
                                        </footer>
                                    </div>
                                </div>

                            )
                        })
                    }
                </form>
            </div>


        </>
    )
}
export default PollModal;