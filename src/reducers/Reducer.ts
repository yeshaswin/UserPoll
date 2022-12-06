// @ts-ignore
import { AdminActionTypes, UserActionTypes, LoginActionTypes } from "../util/ActionTypes.ts"
// @ts-ignore
import { Errors } from "../Errors/ErrorCodes.ts"

export class AdminPoll {
    label: string
    closed: boolean
    questions: Question[]
    constructor() {
        this.label = ''
        this.closed = false
        this.questions = [new Question()]
    }
}
export class UserPoll {
    questions: object
    constructor() {
        this.questions = {}
    }
}
export class Question {
    options: Option[]
    label: string;
    constructor() {
        this.label = ''
        this.options = [new Option(), new Option()]
    }
}
export class Option {
    value: string;
    users: []
    constructor() {
        // this.label = label
        this.users = []
        this.value = ''
    }
}
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
export class State {
    Adminpolls: AdminPoll[]
    AdminpollForm: AdminPoll;
    AdminshowPollForm: boolean
    showChart: boolean
    AdminCurrentPoll: number
    UserpollForm: UserPoll
    UsershowPollForm: boolean
    UserCurrentPoll: number
    users: User[]
    userForm: User
    error: string
    loginStatus: boolean
    userType: string
    currentUser: number
    constructor() {
        this.Adminpolls = []
        this.AdminshowPollForm = false
        this.AdminpollForm = new AdminPoll()
        this.showChart = false
        this.AdminCurrentPoll = 0
        this.UserCurrentPoll = 0
        this.UsershowPollForm = false
        this.UserpollForm = new UserPoll()
        this.users = []
        this.userForm = new User()
        this.error = ''
        this.loginStatus = false
        this.userType = ''
        this.currentUser = -1
    }
}
const initialState = new State();

const Reducer = (state = initialState, action) => {

    switch (action.type) {
        case AdminActionTypes.ADD_POLL: {
            let AllPolls = state.Adminpolls
            AllPolls = [...AllPolls, state.AdminpollForm]
            state.Adminpolls = AllPolls
            state.AdminpollForm = new AdminPoll()
            return { ...state, AdminshowPollForm: action.value }

        }
        case AdminActionTypes.CLOSE_POLL: {
            let AllPolls = state.Adminpolls
            AllPolls[action.index].closed = true
            state.Adminpolls = AllPolls
            return { ...state, Adminpolls: AllPolls }

        }
        case AdminActionTypes.SHOW_HIDE_POLL_FORM: {
            state.AdminpollForm = new AdminPoll()
            return { ...state, AdminshowPollForm: action.value }
        }
        case AdminActionTypes.POLL_LABEL_CHANGE: {
            const pollForm = state.AdminpollForm;
            pollForm.label = action.value
            return { ...state, AdminpollForm: pollForm }
        }
        case AdminActionTypes.QUESTION_LABEL_CHANGE: {
            const pollForm = state.AdminpollForm;
            pollForm.questions[action.index].label = action.label
            return { ...state, AdminpollForm: pollForm }
        }
        case AdminActionTypes.OPTION_VALUE_CHANGE: {
            const pollForm = state.AdminpollForm;
            pollForm.questions[action.QuestionIndex].options[action.OptionIndex].value = action.Value
            return { ...state, AdminpollForm: pollForm }
        }
        case AdminActionTypes.ADD_OPTION: {
            const pollForm = state.AdminpollForm;
            pollForm.questions[action.index].options.push(new Option())
            return { ...state, AdminpollForm: pollForm }
        }
        case AdminActionTypes.ADD_QUESTION: {
            const pollForm = state.AdminpollForm;
            pollForm.questions.push(new Question())
            return { ...state, AdminpollForm: pollForm }
        }
        case AdminActionTypes.SHOW_CHART: {
            state.AdminCurrentPoll = action.index
            return { ...state, showChart: action.value, AdminCurrentPoll: action.index }
        }
        case UserActionTypes.USER_SAVE_POLL: {
            const AllPolls = state.Adminpolls
            const AllUsers = state.users
            if (!AllUsers[action.value].submittedPolls.includes(state.UserCurrentPoll)) {
                AllUsers[action.value].submittedPolls.push(state.UserCurrentPoll)
            }
            for (const [key, value] of Object.entries(state.UserpollForm.questions)) {
                if (!(AllPolls[state.UserCurrentPoll].questions[`${key}`].options[`${value}`].users.includes(value))) {
                    AllPolls[state.UserCurrentPoll].questions[`${key}`].options[`${value}`].users.push(action.value)


                }

            }

            return { ...state, UsershowPollForm: false,UserpollForm: new UserPoll() }
        }
        case UserActionTypes.USER_SHOW_POLL_FORM: {
            const pollForm = new UserPoll();
            return { ...state, pollForm: pollForm, UsershowPollForm: action.value, UserCurrentPoll: action.index }

        }
        case UserActionTypes.USER_HIDE_POLL_FORM: {
            const pollForm = new UserPoll();

            return { ...state, UserpollForm: pollForm, UsershowPollForm: action.value,UserCurrentPoll: 0 }

        }
        case UserActionTypes.USER_OPTION_SELECT: {
            const pollForm = state.UserpollForm;
            pollForm.questions[action.QuestionIndex] = action.OptionIndex
            return { ...state, UserpollForm: pollForm }


        }
        case LoginActionTypes.USER_SIGNUP: {
            let AllUsers = state.users
            const userform = state.userForm

            if (AllUsers) {
                const Usernames = AllUsers.map(function (user) { return user.userName })
                if (Usernames.includes(userform.userName)) {
                    state.error = Errors.USER_ALREADY_EXISTS
                    return { ...state, userForm: new User(), error: Errors.USER_ALREADY_EXISTS }
                }
                else {

                    AllUsers = [...AllUsers, state.userForm]
                    state.users = AllUsers
                    state.error = Errors.SIGNUP_SUCCESS
                    state.userForm = new User()
                    return { ...state, users: AllUsers, error: Errors.SIGNUP_SUCCESS, userForm: new User() }
                }


            }
            else {
                AllUsers = [...AllUsers, state.userForm]
                state.users = AllUsers
                state.error = Errors.SIGNUP_SUCCESS
                state.userForm = new User()
                return { ...state, users: AllUsers, error: Errors.SIGNUP_SUCCESS, userForm: new User() }
            }

        }
        case LoginActionTypes.USER_LOGIN: {
            let AllUsers = state.users
            let obj = AllUsers.find(user => user.userName === state.userForm.userName);
            if (obj) {
                if ((obj.userName === state.userForm.userName) && (obj.password === state.userForm.password)) {
                    state.loginStatus = true
                    state.userType = obj.type
                    state.currentUser = AllUsers.findIndex(user => user.userName === state.userForm.userName);
                    state.error = ''
                    return { ...state, userType: obj.type, loginStatus: true, error: '', userForm: new User() }
                }
                else {
                    state.loginStatus = false
                    state.userType = ''
                    state.currentUser = -1
                    state.error = Errors.WRONG_PASSWORD
                    return { ...state, error: Errors.WRONG_PASSWORD, loginStatus: false, userType: '', userForm: new User() }
                }
            }
            else {
                state.loginStatus = false
                state.userType = ''
                state.currentUser = -1
                state.error = Errors.USER_NOT_FOUND
                return { ...state, error: Errors.USER_NOT_FOUND, loginStatus: false, userType: '', userForm: new User() }
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
            state.error = ''
            return { ...state, userForm: userform }

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
        default:
            return state;
    }
};
export default Reducer;

