import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Errors } from '../Errors/ErrorCodes.ts';
import { onPasswordChange, onUsernameChange, onSignUp, onUserTypeChange } from '../actions/LoginActions.ts';

const SignUpPage=() =>{
  const Navigate = useNavigate()

  const myState = useSelector((state) => state.LoginReducer)
  const dispatch = useDispatch();
  const UsernameChangeHandler=(value)=> {

    dispatch(onUsernameChange(value))
  }
  const passwordChangeHandler=(value) =>{
    dispatch(onPasswordChange(value))
  }
  const TypeChangeHandler=(value) =>{
    dispatch(onUserTypeChange(value))
  }
  const onUserSignup=() =>{
    dispatch(onSignUp())
    if(myState.error!==''){
      alert(myState.error)

    }
    else{
      Navigate("/login")

    }

  }
  return (
    <>
      <section className="hero is-light is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <p className="title is-1">Sign-Up</p>
                <form action="" className="box">
                  <div className="field">
                    <label className="label">Username</label>
                    <div className="control has-icons-left">
                      <input className="input " type="text" required placeholder="Text input" value={myState.userForm.userName} onChange={(e) => UsernameChangeHandler(e.target.value)} ></input>

                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left">
                      <input className="input " type="password" required placeholder="Text input" value={myState.userForm.password} onChange={(e) => passwordChangeHandler(e.target.value)}></input>

                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Role</label>
                    <div className="control">
                      <div className="select">
                        <select onChange={(e) => TypeChangeHandler(e.target.value)} required  name="select_role" value={myState.userForm.type}>
                          <option value="" disabled>None</option>
                          <option value="User">User</option>
                          <option value="Admin">Admin</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <input className="button is-success" onClick={onUserSignup} type="submit" value="Sign-Up" required></input>
                    <span  ><p >Already have an Account? <Link to="/login" style={{ textDecoration:'underline'}}>Login</Link></p></span>
                    <span  ><p > <br></br></p></span>
                    <span  ><p >On successful Signup, you will be redirected to Login Page</p></span>
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
export default SignUpPage;