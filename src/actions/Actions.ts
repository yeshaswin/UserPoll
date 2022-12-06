// @ts-ignore

import { AdminActionTypes,UserActionTypes,LoginActionTypes } from "../util/ActionTypes.ts"

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
export const onUpdatePoll =(PollForm,currentPoll,currentUser)=>{
   return { type: AdminActionTypes.UPDATE_POLL,PollForm:PollForm,currentPoll:currentPoll,currentUser:currentUser}
}
//--------------------------------
export const onUserSavePollClickHandler = (value) => {
   return { type: UserActionTypes.USER_SAVE_POLL, value: value }
}
export const onUserClosePollClickHandler = () => {
   return { type: UserActionTypes.USER_HIDE_POLL_FORM, value: false }
}
export const onUserViewPollClickHandler = (index) => {
   return { type: UserActionTypes.USER_SHOW_POLL_FORM, value: true, index: index }
}
export const onUserSelectOptionHandler = (QuestionIndex, OptionIndex) => {
   return { type: UserActionTypes.USER_OPTION_SELECT, QuestionIndex: QuestionIndex, OptionIndex: OptionIndex }
}
//---------------------------------
export const onSignUp = () => {
    return { type: LoginActionTypes.USER_SIGNUP }
}
export const onLogin = () => {
    return { type: LoginActionTypes.USER_LOGIN }
}
export const onLogout = () => {
    return { type: LoginActionTypes.USER_LOGOUT }
}
export const onUsernameChange = (value) => {
    return { type: LoginActionTypes.USERNAME_CHANGE, value: value }

}
export const onPasswordChange = (value) => {
    return { type: LoginActionTypes.PASSWORD_CHANGE, value: value }

}
export const onUserTypeChange = (value) => {
    return { type: LoginActionTypes.TYPE_CHANGE, value: value }

}
export const onUpdateUser=(currentPoll,currentUser)=>{
    return { type: LoginActionTypes.UPDATE_USER,currentPoll:currentPoll,currentUser:currentUser }
}
