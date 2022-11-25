import { LoginActionTypes } from "../util/ActionTypes.ts"
export class User {
    userName: string
    password: string
    type: string
    submittedPolls: []
    constructor() {
        this.userName = ''
        this.password = ''
        this.type = ''
        this.submittedPolls = []
    }
}
export class LoginState {
    userForm: User
    error: string
    loginStatus: boolean
    userType: string
    currentUser: number
    constructor() {
        this.userForm = new User()
        this.error = ''
        this.loginStatus = false
        this.userType = ''
        this.currentUser = -1
    }


}
const initialState = new LoginState();
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LoginActionTypes.USER_SIGNUP: {
            let AllUsers = JSON.parse(localStorage.getItem("all_users")!)
            const userform = state.userForm

            if (AllUsers) {
                const Usernames = AllUsers.map(function (user) { return user.userName })
                if (Usernames.includes(userform.userName)) {
                    return { ...state, userForm: new User(), error: 'user_already_exists' }
                }
                else {

                    AllUsers = [...AllUsers, state.userForm]
                    localStorage.setItem("all_users", JSON.stringify(AllUsers))
                }


            }
            else {
                localStorage.setItem("all_users", JSON.stringify([userform]))
            }
            return { ...state, userForm: new User() }

        }
        case "USER_LOGIN": {
            let AllUsers = JSON.parse(localStorage.getItem("all_users")!)
            let obj = AllUsers.find(user => user.userName === state.userForm.userName);
            if (obj) {
                if ((obj.userName === state.userForm.userName) && (obj.password === state.userForm.password)) {
                    state.loginStatus = true
                    state.userType = obj.type
                    state.currentUser = AllUsers.findIndex(user => user.userName === state.userForm.userName);

                    return { ...state, userType: obj.type, loginStatus: true, error: '', userForm: new User() }
                }
                else {
                    state.loginStatus = false
                    state.userType = ''
                    state.currentUser = -1
                    return { ...state, error: "wrong_password", loginStatus: false, userType: '', userForm: new User() }
                }
            }
            else {
                state.loginStatus = false
                state.userType = ''
                state.currentUser = -1
                return { ...state, error: "user_not_found", loginStatus: false, userType: '', userForm: new User() }
            }



        }
        case "USER_LOGOUT": {
            state.loginStatus = false
            state.userType = ''
            state.error = ''
            state.currentUser = -1
            return { ...state, error: "", loginStatus: false, userType: '', userForm: new User() }

        }
        case "USERNAME_CHANGE": {
            const userform = state.userForm
            userform.userName = action.value
            return { ...state, userForm: userform }



        }
        case "PASSWORD_CHANGE": {
            const userform = state.userForm
            userform.password = action.value
            return { ...state, userForm: userform }

        }
        case "TYPE_CHANGE": {
            const userform = state.userForm
            userform.type = action.value
            return { ...state, userForm: userform }

        }
        default: { return state }

    }
}
export default LoginReducer;