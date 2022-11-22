export const onAddPollClickHandler= ()=>{
   return {type:"SHOW_HIDE_POLL_FORM", value:true}
}

export const onAddOptionHandler=(questionIndex)=>{
   return {type:"ADD_OPTION", index:questionIndex }
}
export const onAddQuestionHandler=()=>{
   return {type:"ADD_QUESTION" }
}