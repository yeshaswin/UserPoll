import { useDispatch } from "react-redux";
import { onOptionChangeHandler } from '../../actions/AddPollActions.ts'
const Option = (props) => {
   const dispatch = useDispatch();
   function OptionChangeHandler(e) {
      dispatch(onOptionChangeHandler(props.questionIndex, props.optionIndex, e.target.value))
   }
   return (
      <>
         <input className="input is-primary" type="text" placeholder="new option" label={props.option.label} value={props.option.value} onChange={(e) => OptionChangeHandler(e)}></input>
      </>
   )
}

export default Option;