import React from 'react';
import Question from "./Question";
import { useSelector, useDispatch } from 'react-redux'
import { onAddQuestionHandler } from "../../actions/Actions";
import { RootState } from 'store';
const PollForm = (): JSX.Element => {
    const myState = useSelector((state: RootState) => state.Reducer)
    const dispatch = useDispatch();
    const AddQuestionHandler = () => {
        dispatch(onAddQuestionHandler())
    }
    return (

        <>
            {myState.AdminpollForm.questions.map((question, index) => {
                return (
                    <Question inputQuestion={question} key={index} questionIndex={index}></Question>
                )
            })}
            <button className="button is-primary is-rounded" onClick={AddQuestionHandler} data-testid="AddQstnBtn">+Add Question</button>
        </>
    )
}
export default PollForm;