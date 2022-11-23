export const onAddPollClickHandler= ()=>{
   return {type:"SHOW_HIDE_POLL_FORM", value:true}
}
export const onSavePollClickHandler= ()=>{
   return {type:"ADD_POLL"}
}
export const onClosePollClickHandler= ()=>{
   return {type:"SHOW_HIDE_POLL_FORM", value:false}
}

export const onAddOptionHandler=(questionIndex)=>{
   return {type:"ADD_OPTION", index:questionIndex }
}
export const onAddQuestionHandler=()=>{
   return {type:"ADD_QUESTION" }
}
export const onPollNameChangeHandler=(label)=>{
   return {type:"POLL_LABEL_CHANGE",value:label }
}
export const onQuestionChangeHandler=(index,label)=>{
   return {type:"QUESTION_LABEL_CHANGE",index:index,label:label }
}
export const onOptionChangeHandler=(QuestionIndex,OptionIndex,Value)=>{
   return {type:"OPTION_VALUE_CHANGE",QuestionIndex:QuestionIndex,OptionIndex:OptionIndex,Value:Value }
}
export const onClosePollHandler=(index)=>{
   return {type:"CLOSE_POLL" ,index:index}
}