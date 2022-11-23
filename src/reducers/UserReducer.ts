
export class Poll {
    pollIndex:number
    questions:object
    // questions : Question[]
    constructor(){
      this.questions={}
      // this.pollIndex=0
      // this.questions = [new Question()]
    }
  }
  // export class Question{
  //   questionIndex:number
  //   optionIndex:number
  // }
 
  export class UserState{
    pollForm : Poll
    showPollForm : boolean
    currentPoll:number
    constructor(){
      this.currentPoll=0
      this.showPollForm = false
      this.pollForm = new Poll()
      
    }
  }
  const initialState = new UserState();
const UserReducer=(state=initialState,action)=>{
switch(action.type){
  case "USER_SAVE_POLL":{
    const AllPolls=JSON.parse(localStorage.getItem("all_polls"))
    for(const i=0;i<state.pollForm.questions.length;i++){
      AllPolls[state.currentPoll].questions[i].options[state.pollForm.questions[i]].users.push(0)

    }
    localStorage.setItem("all_polls",JSON.stringify(AllPolls))
    state.pollForm=new Poll
    return {...state, showPollForm:false}
  }
  case "USER_SHOW_POLL_FORM":{
    state.pollForm=new Poll
    const pollForm =  state.pollForm;
    pollForm.pollIndex=state.currentPoll
    return {...state, pollForm:pollForm,showPollForm:action.value,currentPoll:action.index}   
    
  }
  case "USER_HIDE_POLL_FORM":{
    state.pollForm=new Poll
    return {...state, showPollForm:action.value}
    
  }
  case "USER_OPTION_SELECT":{
    console.log("user selected")
    const pollForm =  state.pollForm;
    pollForm.questions[action.QuestionIndex]=action.OptionIndex
    // pollForm.questions[action.QuestionIndex].questionIndex=action.QuestionIndex

    return {...state, pollForm:pollForm}   

    
  }
    

    default:return state;
}
}
export default UserReducer;