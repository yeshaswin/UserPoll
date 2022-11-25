import { useSelector, useDispatch } from 'react-redux'
import { onPasswordChange, onUsernameChange, onSignUp, onLogin, onLogout, onUserTypeChange } from '../actions/LoginActions.ts';
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const Navigate=useNavigate()
  const myState = useSelector((state) => state.LoginReducer)
  const dispatch = useDispatch();
  function UsernameChangeHandler(value) {
    dispatch(onUsernameChange(value))
  }
  function passwordChangeHandler(value) {
    dispatch(onPasswordChange(value))
  }
  function TypeChangeHandler(value) {
    dispatch(onUserTypeChange(value))
  }
  function onUserSignup(){
    dispatch(onSignUp())
  } 

  function onUserLogin(){
    dispatch(onLogin())
      if(myState.loginStatus){
        if(myState.userType==="User"){
          Navigate("/user")
        }
        else {
          Navigate("/admin")
        }
      
        
      }
      else{
        console.log(myState.loginStatus)
      }



  }
  return (
    <>
      <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input " type="text" placeholder="Text input" value={myState.userForm.userName} onChange={(e) => UsernameChangeHandler(e.target.value)}></input>
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        {/* <p className="help is-success">This username is available</p> */}
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input " type="password" placeholder="Text input" value={myState.userForm.password} onChange={(e) => passwordChangeHandler(e.target.value)}></input>
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        {/* <p className="help is-success">This username is available</p> */}
      </div>
      <div className="field">
        <label className="label">Role</label>
        <div className="control">
          <div className="select">
            <select onChange={(e) => TypeChangeHandler(e.target.value)}>
            <option></option>

              <option>User</option>
              <option>Admin</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" onClick={onUserSignup}>Signup</button>
        </div>
        <div className="control">
          <button className="button is-link is-light" onClick={onUserLogin}>Login</button>
        </div>
      </div>
    </>
  )
}
export default LoginPage;