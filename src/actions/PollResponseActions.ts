import { UserActionTypes } from './../util/ActionTypes.ts';
export const onUserSavePollClickHandler = (value) => {
   return { type: UserActionTypes.USER_SAVE_POLL, value: value }
}
export const onUserClosePollClickHandler = () => {
   return { type: "USER_HIDE_POLL_FORM", value: false }
}
export const onUserViewPollClickHandler = (index) => {
   return { type: "USER_SHOW_POLL_FORM", value: true, index: index }
}
export const onUserSelectOptionHandler = (QuestionIndex, OptionIndex) => {
   return { type: "USER_OPTION_SELECT", QuestionIndex: QuestionIndex, OptionIndex: OptionIndex }
}