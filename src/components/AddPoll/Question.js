import Option from './Option'
import {useDispatch} from "react-redux";
import {onAddOptionHandler} from '../../actions/AddPollActions.ts'
function Question(props) {
    const dispatch=useDispatch();
    return (
        <>
            <input className="input is-primary" type="text" value={props.inputQuestion.label} placeholder="Question" ></input>
            {props.inputQuestion.options.map((option,index)=>{
                return(
                    <Option option={option} key={index} ></Option>
                )
            })}
            <button className="button is-primary is-rounded" onClick={()=>dispatch(onAddOptionHandler(props.questionIndex))}>+Option</button>
        </>
    )
}
export default Question;