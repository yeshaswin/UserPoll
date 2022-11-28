// @ts-ignore

import { UserActionTypes } from './../util/ActionTypes.ts';
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