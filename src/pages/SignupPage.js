import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { onPasswordChange, onUsernameChange, onSignUp, onUserTypeChange } from '../actions/LoginActions.ts';

function SignUpPage() {
  const Navigate = useNavigate()

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
  function onUserSignup() {
    dispatch(onSignUp())
    Navigate("/login")

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
                        <select onChange={(e) => TypeChangeHandler(e.target.value)} required>
                          <option></option>

                          <option>User</option>
                          <option>Admin</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <input className="button is-success" onClick={onUserSignup} type="submit" value="Sign-Up" required></input>
                    <span> <button className='button is-primary'><Link to="/login">Login</Link></button></span>
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