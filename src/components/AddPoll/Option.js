const Option=(props)=>{
   return(
    <>
    <input className="input is-primary" type="text" placeholder="new option" label={props.option.label} value={props.option.value} ></input>
    </>
   )
}

export default Option;