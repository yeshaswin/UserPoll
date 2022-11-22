import Question from "./Question";
import { useSelector,useDispatch } from 'react-redux'
import { onAddQuestionHandler } from "../../actions/AddPollActions.ts";
export default function PollForm(){
    const myState = useSelector((state) => state.adminReducer)
    const dispatch=useDispatch();
    return(

        <>
       {myState.pollForm.questions.map((question, index)=>{
        return(
            <Question inputQuestion={question} key={index} questionIndex={index}></Question>
        )
       })}
       <button className="button is-primary is-rounded" onClick={()=>dispatch(onAddQuestionHandler())}>+Add Question</button>
        {/* <button className="button is-primary is-rounded" onClick={()=>dispatch(hideToggle())}>submit</button> */}
        </>
    )
}