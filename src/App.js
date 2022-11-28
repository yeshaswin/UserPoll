import { Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from './pages/SignupPage';
import { onLogout } from './actions/LoginActions.ts';

import 'bulma/css/bulma.min.css'
function App() {
  const dispatch=useDispatch()

  function onUserLogout(){
    dispatch(onLogout())
  }
  return (
    <>
      <nav className="navbar " role="navigation" aria-label="main navigation">
        <ul className="navbar-menu">
          {/* <li className="navbar-item">
            <Link to="/login">Login</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Signup">Sign-Up</Link>
          </li>
          <li className="navbar-item">
            <Link to="/user">User</Link>
          </li>
          <li className="navbar-item">
            <Link to="/admin">Admin</Link>
          </li> */}

          <li className="navbar-item navbar-end">
            <Link to="/login" onClick={onUserLogout}>Logout</Link>
          </li>

        </ul>
      </nav>
      <Routes>
        <Route index element={<LoginPage />} ></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
