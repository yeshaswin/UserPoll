import { useSelector, useDispatch } from 'react-redux'
import { onPasswordChange, onUsernameChange,onLogin} from '../actions/LoginActions.ts';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
function LoginPage() {
  const Navigate = useNavigate()
  const myState = useSelector((state) => state.LoginReducer)
  const dispatch = useDispatch();

  function UsernameChangeHandler(value) {
  
    dispatch(onUsernameChange(value))
  }
  function passwordChangeHandler(value) {
    dispatch(onPasswordChange(value))
  }
  function onUserLogin() {
    dispatch(onLogin())
    if (myState.loginStatus) {
      if (myState.userType === "User") {
        Navigate("/user")
      }
      else {
        Navigate("/admin")
      }


    }
    else {
      console.log(myState.loginStatus)
    }
  }


  return (
    <>
  <section className="hero is-light is-fullheight">

  <div className="hero-body">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
        <p className="title is-1">Login</p>

          <form action="" className="box">
            <div className="field">
              <label  className="label">Username</label>
              <div className="control has-icons-left">
              <input className="input " type="text" required placeholder="Text input" value={myState.userForm.userName} onChange={(e) => UsernameChangeHandler(e.target.value)} ></input>

              </div>
            </div>
            <div className="field">
              <label  className="label">Password</label>
              <div className="control has-icons-left">
              <input className="input " type="password" required placeholder="Text input" value={myState.userForm.password} onChange={(e) => passwordChangeHandler(e.target.value)}></input>

              </div>
            </div>

            <div className="field">
            <input className="button is-link is-light" type="submit" onClick={onUserLogin} value="Login"></input>
            <span> <button className='button is-primary'><Link to="/signup">Sign-Up</Link></button></span>

            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}
export default LoginPage;