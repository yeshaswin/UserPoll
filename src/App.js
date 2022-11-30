import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from './pages/SignupPage';

import 'bulma/css/bulma.min.css'
function App() {


  return (
    <>

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
