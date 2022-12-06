import Question from "./Question";
import { useSelector, useDispatch } from 'react-redux'
import { onAddQuestionHandler } from "../../actions/Actions.ts";
 const PollForm=()=> {
    const myState = useSelector((state) => state.Reducer)
    const dispatch = useDispatch();
    const AddQuestionHandler=()=> {
        dispatch(onAddQuestionHandler())
    }
    return (

        <>
            {myState.AdminpollForm.questions.map((question, index) => {
                return (
                    <Question inputQuestion={question} key={index} questionIndex={index}></Question>
                )
            })}
            <button className="button is-primary is-rounded" onClick={AddQuestionHandler}>+Add Question</button>
        </>
    )
}
export default PollForm;