export class Poll {
  questions : Question[]
  constructor(){
    this.questions = [new Question()]
  }
}
export class Question{
  options: Option[]
  label: string;
  constructor(){
    this.options = [new Option('a)', ''), new Option('b)', '')]
  }
}
export class Option{
  label: string;
  value: string;
  constructor(label, value){
    this.label = label
    this.value = value
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
      let pollsData: Poll[] = state.polls;
      pollsData.push(action.data)
      state.polls = pollsData;
      break;
    }
    case 'SHOW_HIDE_POLL_FORM':{
      return {...state, showPollForm:action.value}
    }
    case 'ADD_OPTION':{
      const pollForm =  state.pollForm;
      pollForm.questions[action.index].options.push(new Option('',''))
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