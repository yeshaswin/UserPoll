// @ts-ignore

import { AdminActionTypes } from "../util/ActionTypes.ts"

export const onAddPollClickHandler = () => {
   return { type: AdminActionTypes.SHOW_HIDE_POLL_FORM, value: true }
}
export const onSavePollClickHandler = () => {
   return { type: AdminActionTypes.ADD_POLL }
}
export const onClosePollClickHandler = () => {
   return { type: AdminActionTypes.SHOW_HIDE_POLL_FORM, value: false }
}

export const onAddOptionHandler = (questionIndex) => {
   return { type: AdminActionTypes.ADD_OPTION, index: questionIndex }
}
export const onAddQuestionHandler = () => {
   return { type: AdminActionTypes.ADD_QUESTION }
}
export const onPollNameChangeHandler = (label) => {
   return { type: AdminActionTypes.POLL_LABEL_CHANGE, value: label }
}
export const onQuestionChangeHandler = (index, label) => {
   return { type: AdminActionTypes.QUESTION_LABEL_CHANGE, index: index, label: label }
}
export const onOptionChangeHandler = (QuestionIndex, OptionIndex, Value) => {
   return { type: AdminActionTypes.OPTION_VALUE_CHANGE, QuestionIndex: QuestionIndex, OptionIndex: OptionIndex, Value: Value }
}
export const onClosePollHandler = (index) => {
   return { type: AdminActionTypes.CLOSE_POLL, index: index }
}
export const onShowChartHandler = (value,index) => {
   return { type: AdminActionTypes.SHOW_CHART,value:value,index:index}
}