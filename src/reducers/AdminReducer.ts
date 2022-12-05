// @ts-ignore
import { AdminActionTypes } from "../util/ActionTypes.ts"
export class Poll {
  label: string
  closed: boolean
  questions: Question[]
  constructor() {
    this.label = ''
    this.closed = false
    this.questions = [new Question()]
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
export class AdminState {
  polls: Poll[]
  pollForm: Poll;
  showPollForm: boolean
  showChart: boolean
  currentPoll:number
  constructor() {
    this.polls = []
    this.showPollForm = false
    this.pollForm = new Poll()
    this.showChart=false
    this.currentPoll=0
  }
}
const initialState = new AdminState();

const adminReducer = (state = initialState, action) => {

  switch (action.type) {
    case AdminActionTypes.ADD_POLL: {
      // let AllPolls = JSON.parse(localStorage.getItem("all_polls")!)
      let AllPolls=state.polls
      AllPolls=[...AllPolls,state.pollForm]
      state.polls=AllPolls
        // localStorage.setItem("all_polls", JSON.stringify(AllPolls))
      state.pollForm = new Poll()
      return { ...state, showPollForm: action.value }

    }
    case AdminActionTypes.CLOSE_POLL: {
      // const AllPolls = JSON.parse(localStorage.getItem("all_polls")!)
      let AllPolls=state.polls
      AllPolls[action.index].closed = true
      state.polls=AllPolls
      // localStorage.setItem("all_polls", JSON.stringify(AllPolls))
      return { ...state, polls: AllPolls }

    }
    case AdminActionTypes.SHOW_HIDE_POLL_FORM: {
      state.pollForm = new Poll()
      return { ...state, showPollForm: action.value }
    }
    case AdminActionTypes.POLL_LABEL_CHANGE: {
      const pollForm = state.pollForm;
      pollForm.label = action.value
      return { ...state, pollForm: pollForm }
    }
    case AdminActionTypes.QUESTION_LABEL_CHANGE: {
      const pollForm = state.pollForm;
      pollForm.questions[action.index].label = action.label
      return { ...state, pollForm: pollForm }
    }
    case AdminActionTypes.OPTION_VALUE_CHANGE: {
      const pollForm = state.pollForm;
      pollForm.questions[action.QuestionIndex].options[action.OptionIndex].value = action.Value
      return { ...state, pollForm: pollForm }
    }
    case AdminActionTypes.ADD_OPTION: {
      const pollForm = state.pollForm;
      pollForm.questions[action.index].options.push(new Option())
      return { ...state, pollForm: pollForm }
    }
    case AdminActionTypes.ADD_QUESTION: {
      const pollForm = state.pollForm;
      pollForm.questions.push(new Question())
      return { ...state, pollForm: pollForm }
    }
    case AdminActionTypes.SHOW_CHART:{
      state.currentPoll=action.index
      return {...state,showChart:action.value,currentPoll:action.index}
    }
    case AdminActionTypes.UPDATE_POLL:{
      for (const [key, value] of Object.entries(action.pollForm.questions)) {
        if (!(state.polls[action.currentPoll].questions[`${key}`].options[`${value}`].users.includes(value))) {
          state.polls[action.currentPoll].questions[`${key}`].options[`${value}`].users.push(action.value)


        }

      }
      return {...state}
    }
    default:
      return state;
  }
};
export default adminReducer;