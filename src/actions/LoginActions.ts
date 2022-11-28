// @ts-ignore

import { LoginActionTypes } from "../util/ActionTypes.ts"
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
