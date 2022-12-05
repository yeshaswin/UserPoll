// @ts-ignore
import { LoginActionTypes } from "../util/ActionTypes.ts"
// @ts-ignore
import { Errors } from "../Errors/ErrorCodes.ts"
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
    users:User[]
    userForm: User
    error: string
    loginStatus: boolean
    userType: string
    currentUser: number
    constructor() {
        this.users=[]
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
            // let AllUsers = JSON.parse(localStorage.getItem("all_users")!)
            let AllUsers=state.users
            const userform = state.userForm

            if (AllUsers) {
                const Usernames = AllUsers.map(function (user) { return user.userName })
                if (Usernames.includes(userform.userName)) {
                    state.error= Errors.USER_ALREADY_EXISTS
                    return { ...state, userForm: new User(), error: Errors.USER_ALREADY_EXISTS }
                }
                else {

                    AllUsers = [...AllUsers, state.userForm]
                    state.users=AllUsers
                    state.error= Errors.SIGNUP_SUCCESS
                    state.userForm=new User()
                    return {...state,users:AllUsers,error:Errors.SIGNUP_SUCCESS,userform:new User()}
                    // localStorage.setItem("all_users", JSON.stringify(AllUsers))
                }


            }
            else {
                AllUsers = [...AllUsers, state.userForm]
                state.users=AllUsers
                state.error= Errors.SIGNUP_SUCCESS
                state.userForm=new User()
                return {...state,users:AllUsers,error:Errors.SIGNUP_SUCCESS,userform:new User()}
                // localStorage.setItem("all_users", JSON.stringify([userform]))
            }
            // return { ...state, userForm: new User() }

        }
        case LoginActionTypes.USER_LOGIN: {
            // let AllUsers = JSON.parse(localStorage.getItem("all_users")!)
            let AllUsers=state.users
            let obj = AllUsers.find(user => user.userName === state.userForm.userName);
            if (obj) {
                if ((obj.userName === state.userForm.userName) && (obj.password === state.userForm.password)) {
                    state.loginStatus = true
                    state.userType = obj.type
                    state.currentUser = AllUsers.findIndex(user => user.userName === state.userForm.userName);
                    state.error=''
                    return { ...state, userType: obj.type, loginStatus: true, error: '', userForm: new User() }
                }
                else {
                    state.loginStatus = false
                    state.userType = ''
                    state.currentUser = -1
                    state.error=Errors.WRONG_PASSWORD
                    return { ...state, error: Errors.WRONG_PASSWORD, loginStatus: false, userType: '', userForm: new User() }
                }
            }
            else {
                state.loginStatus = false
                state.userType = ''
                state.currentUser = -1
                state.error=Errors.USER_NOT_FOUND
                return { ...state, error:Errors.USER_NOT_FOUND, loginStatus: false, userType: '', userForm: new User() }
            }



        }
        case LoginActionTypes.USER_LOGOUT: {
            state.loginStatus = false
            state.userType = ''
            state.error = ''
            state.currentUser = -1
            return { ...state, error: "", loginStatus: false, userType: '', userForm: new User() }

        }
        case LoginActionTypes.USERNAME_CHANGE: {
            const userform = state.userForm
            userform.userName = action.value
            state.error=''
            return { ...state ,userForm:userform}

        }
        case LoginActionTypes.PASSWORD_CHANGE: {
            const userform = state.userForm
            userform.password = action.value
            return { ...state, userForm: userform }

        }
        case LoginActionTypes.TYPE_CHANGE: {
            const userform = state.userForm
            userform.type = action.value
            return { ...state, userForm: userform }

        }
        case LoginActionTypes.UPDATE_USER:{
            if (!state.users[action.currentUser].submittedPolls.includes(action.currentPoll)) {
                state.users[action.currentUser].submittedPolls.push(action.currentPoll)
              }
              return {...state}
        }
        default: { return state }

    }
}
export default LoginReducer;