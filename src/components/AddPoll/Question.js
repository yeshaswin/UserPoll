import Option from './Option'
import { useDispatch } from "react-redux";
import { onAddOptionHandler, onQuestionChangeHandler } from '../../actions/Actions.ts'
const Question=(props)=> {
    const dispatch = useDispatch();
    const AddOptionHandler=()=> {
        dispatch(onAddOptionHandler(props.questionIndex))
    }
    return (
        <>
            <input className="input " type="text" value={props.inputQuestion.label} placeholder="Question" required name="question"onChange={(e) => dispatch(onQuestionChangeHandler(props.questionIndex, e.target.value))}></input>
            {props.inputQuestion.options.map((option, index) => {
                return (
                    <Option option={option} key={index} optionIndex={index} questionIndex={props.questionIndex}></Option>
                )
            })}
            <button className="button is-primary is-rounded" onClick={AddOptionHandler}>+Option</button>
        </>
    )
}
export default Question;