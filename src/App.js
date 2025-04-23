
import SubmitReport from "./Pages/SubmitReport/SubmitReport.jsx";
import Header from "./Components/Header/Header.jsx";
import React from "react";
import UserProfile from './Pages/UserProfile/UserProfile.jsx'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SignupPage from "./Pages/SignUp.jsx";
import LoginPage from "./Pages/Login.jsx";

import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/submitreport" element={<SubmitReport>}/>
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
