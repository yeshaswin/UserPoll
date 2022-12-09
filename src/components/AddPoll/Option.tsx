import React from 'react';
import { useDispatch } from "react-redux";
import { onOptionChangeHandler } from '../../actions/Actions'
const Option = (props): JSX.Element => {
   const dispatch = useDispatch();
   const OptionChangeHandler = (e) => {
      dispatch(onOptionChangeHandler(props.questionIndex, props.optionIndex, e.target.value))
   }
   return (
      <>
         <input className="input " required name="option" type="text" placeholder="new option" data-label={props.option.label} value={props.option.value} onChange={(e) => OptionChangeHandler(e)}></input>
      </>

   )
}

export default Option;