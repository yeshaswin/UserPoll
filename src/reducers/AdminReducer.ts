import PollForm from "../components/AddPoll/PollForm";

export class Poll {
  label:string
  questions : Question[]
  constructor(){
    this.label=''
    this.questions = [new Question()]
  }
}
export class Question{
  options: Option[]
  label: string;
  constructor(){
    this.label=''
    this.options = [new Option(), new Option()]
  }
}
export class Option{
  value: string;
  constructor(){
    // this.label = label
    this.value = ''
  }
}
export class AdminState{
  polls: Poll[]
  pollForm : Poll;
  showPollForm : boolean
  constructor(){
    this.polls = []
    this.showPollForm = false
    this.pollForm = new Poll()
  }
}
const initialState = new AdminState();

const adminReducer= (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_POLL':{
      state.polls = [...state.polls,state.pollForm]
      localStorage.setItem("all_polls",JSON.stringify(state.polls))
      state.pollForm=new Poll

      return {...state, showPollForm:action.value}
    }
    case 'SHOW_HIDE_POLL_FORM':{
      return {...state, showPollForm:action.value}
    }
    case 'POLL_LABEL_CHANGE':{
      const pollForm =  state.pollForm;
      pollForm.label=action.value
      return {...state, pollForm:pollForm}
    }
    case 'QUESTION_LABEL_CHANGE':{
      const pollForm =  state.pollForm;
      pollForm.questions[action.index].label=action.label
      return {...state, pollForm:pollForm}
    }
    case 'OPTION_VALUE_CHANGE':{
      const pollForm =  state.pollForm;
      pollForm.questions[action.QuestionIndex].options[action.OptionIndex].value=action.Value
      return {...state, pollForm:pollForm}
    }
    case 'ADD_OPTION':{
      const pollForm =  state.pollForm;
      pollForm.questions[action.index].options.push(new Option())
      return {...state, pollForm:pollForm}
    }
    case 'ADD_QUESTION':{
      const pollForm =  state.pollForm;
      pollForm.questions.push(new Question())
      return {...state, pollForm:pollForm}
    }
    default:
      return state;
  }
};
export default adminReducer;