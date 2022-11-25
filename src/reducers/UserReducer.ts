
import { UserActionTypes } from './../util/ActionTypes.ts';
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
const initialState = new UserState();
const UserReducer = (state = initialState, action) => {

  switch (action.type) {
    case UserActionTypes.USER_SAVE_POLL: {
      const storedPolls = localStorage.getItem("all_polls");
      const AllPolls = JSON.parse(storedPolls!)
      const AllUsers = JSON.parse(localStorage.getItem("all_users")!)
      if (!AllUsers[action.value].submittedPolls.includes(state.currentPoll)) {
        AllUsers[action.value].submittedPolls.push(state.currentPoll)
      }
      localStorage.setItem("all_users", JSON.stringify(AllUsers))

      for (const [key, value] of Object.entries(state.pollForm.questions)) {
        if (!(AllPolls[state.currentPoll].questions[`${key}`].options[`${value}`].users.includes(value))) {
          AllPolls[state.currentPoll].questions[`${key}`].options[`${value}`].users.push(action.value)


        }

      }
      localStorage.setItem("all_polls", JSON.stringify(AllPolls))
      return { ...state, showPollForm: false, pollForm: new Poll() }
    }
    case "USER_SHOW_POLL_FORM": {
      const pollForm = new Poll();
      console.log("open poll", action.index)
      return { ...state, pollForm: pollForm, showPollForm: action.value, currentPoll: action.index }

    }
    case "USER_HIDE_POLL_FORM": {
      const pollForm = new Poll();

      return { ...state, pollForm: pollForm, showPollForm: action.value, currentPoll: 0 }

    }
    case "USER_OPTION_SELECT": {
      const pollForm = state.pollForm;
      pollForm.questions[action.QuestionIndex] = action.OptionIndex
      return { ...state, pollForm: pollForm }


    }


    default: return state;
  }
}
export default UserReducer;