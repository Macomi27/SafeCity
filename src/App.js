
import SubmitReport from "./Pages/SubmitReport/SubmitReport.jsx";
import Header from "./Components/Header/Header.jsx";
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SignupPage from "./Pages/SignUp.jsx";
import LoginPage from "./Pages/Login.jsx";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/submitreport" element={<SubmitReport>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
