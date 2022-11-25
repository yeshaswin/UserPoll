import { useDispatch } from 'react-redux'
import { onUserSavePollClickHandler, onUserClosePollClickHandler, onUserSelectOptionHandler } from "../../actions/PollResponseActions.ts"

function PollModal(props) {
    const dispatch = useDispatch();

    function OptionChangeHandler(questionindex, optionindex) {
        dispatch(onUserSelectOptionHandler(questionindex, optionindex))
    }
    function SavePollHandler() {
        dispatch(onUserSavePollClickHandler(props.LoginState.currentUser))
    }
    function ClosePollHandler() {
        dispatch(onUserClosePollClickHandler())
    }
    let modal_acvtive = "modal "
    if (props.myState.showPollForm) {
        modal_acvtive = "modal is-active"
    }

    else { modal_acvtive = "modal " }

    return (
        <>
            <div className={modal_acvtive}>
                <div className="modal-background"></div>
                {
                    props.AllPolls.map((poll, pollindex) => {
                        return (
                            (pollindex === props.myState.currentPoll) && <div key={pollindex}>


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
                                                                                <input type="radio" name={String(pollindex) + String(questionindex)} ></input>
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
                                        <button className="button is-success" onClick={SavePollHandler}>Save changes</button>
                                        <button className="button" onClick={ClosePollHandler}>Cancel</button>
                                    </footer>
                                </div>
                            </div>

                        )
                    })
                }
            </div>


        </>
    )
}
export default PollModal;