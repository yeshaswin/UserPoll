import {  Routes, Route, Link } from "react-router-dom";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import 'bulma/css/bulma.min.css'
function App() {
  return (
    <>
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <ul className="navbar-menu">
    <li className="navbar-item">
        <Link to="/user">User</Link>
      </li>
      <li className="navbar-item">
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  </nav>
      <Routes>
        <Route path="/user" element={<UserPage />}/>
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
