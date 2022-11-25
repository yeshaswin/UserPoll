import { LoginActionTypes } from "../util/ActionTypes.ts"
export const onSignUp = () => {
    return { type: LoginActionTypes.USER_SIGNUP }
}
export const onLogin = () => {
    return { type: "USER_LOGIN" }
}
export const onLogout = () => {
    return { type: "USER_LOGOUT" }
}
export const onUsernameChange = (value) => {
    return { type: "USERNAME_CHANGE", value: value }

}
export const onPasswordChange = (value) => {
    return { type: "PASSWORD_CHANGE", value: value }

}
export const onUserTypeChange = (value) => {
    return { type: "TYPE_CHANGE", value: value }

}
