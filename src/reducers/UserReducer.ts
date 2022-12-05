// @ts-ignore
import { UserActionTypes } from "../util/ActionTypes.ts"
// @ts-ignore
import { onUpdatePoll } from "../actions/AddPollActions.ts"
// @ts-ignore
// import { useDispatch } from "react-redux"
import { onUpdateUser } from "../actions/LoginActions.ts"
import asyncDispatchMiddleware from "../Middlewares/AsyncDispatch"
export class Poll {
  questions: object
  constructor() {
    this.questions = {}
  }
}
export class UserState {
  pollForm: Poll
  showPollForm: boolean
  currentPoll: number
  constructor() {
    this.currentPoll = 0
    this.showPollForm = false
    this.pollForm = new Poll()

  }
}
// const updateUser=(currentPoll,currentUser)=>{
//   const dispatch=useDispatch()
//   dispatch(onUpdateUser(currentPoll,currentUser))

// }
// const updatePoll=(pollForm,currentPoll,currentUser)=>{
//   const dispatch=useDispatch()
//   dispatch(onUpdatePoll(pollForm,currentPoll,currentUser))
// }
const initialState = new UserState();
const UserReducer = (state = initialState, action) => {
  // const AdminState = useSelector((admin_state) => admin_state.adminReducer)
  // const LoginState = useSelector((login_state) => login_state.LoginReducer)
  switch (action.type) {
    case UserActionTypes.USER_SAVE_POLL: {
      // const AllPolls = localStorage.getItem("all_polls");
      // const AllPolls = AdminState.polls
      // const AllUsers = JSON.parse(localStorage.getItem("all_users")!)
      // const AllUsers = LoginState.users
      // if (!AllUsers[action.value].submittedPolls.includes(state.currentPoll)) {
      //   AllUsers[action.value].submittedPolls.push(state.currentPoll)
      // }
      console.log(asyncDispatchMiddleware.asyncDispatch,"hello")
      // asyncDispatchMiddleware.asyncDispatch(onUpdateUser(state.currentPoll,action.value))
      // asyncDispatchMiddleware.asyncDispatch(onUpdatePoll(state.pollForm,state.currentPoll,action.value))
      // localStorage.setItem("all_users", JSON.stringify(AllUsers))

      // for (const [key, value] of Object.entries(state.pollForm.questions)) {
      //   if (!(AllPolls[state.currentPoll].questions[`${key}`].options[`${value}`].users.includes(value))) {
      //     AllPolls[state.currentPoll].questions[`${key}`].options[`${value}`].users.push(action.value)


      //   }

      // }
      // updatePoll(state.pollForm,state.currentPoll,action.value)

      // localStorage.setItem("all_polls", JSON.stringify(AllPolls))
      return { ...state, showPollForm: false, pollForm: new Poll() }
    }
    case UserActionTypes.USER_SHOW_POLL_FORM: {
      const pollForm = new Poll();
      return { ...state, pollForm: pollForm, showPollForm: action.value, currentPoll: action.index }

    }
    case UserActionTypes.USER_HIDE_POLL_FORM: {
      const pollForm = new Poll();

      return { ...state, pollForm: pollForm, showPollForm: action.value, currentPoll: 0 }

    }
    case UserActionTypes.USER_OPTION_SELECT: {
      const pollForm = state.pollForm;
      pollForm.questions[action.QuestionIndex] = action.OptionIndex
      return { ...state, pollForm: pollForm }


    }


    default: return state;
  }
}
export default UserReducer;