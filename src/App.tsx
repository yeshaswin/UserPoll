import React from "react";
import { Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from './pages/SignupPage';

import 'bulma/css/bulma.min.css'
const App = (): JSX.Element => {


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
