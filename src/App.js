import React from "react";
// import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import SubmitReport from "./Pages/SubmitReport/SubmitReport.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Header from './Components/Header/Header.jsx'
// import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <SubmitReport />
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route path="/login" component={Login} /> */}
          {/* <Route path="/signup" component={SignUp} /> */}
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          {/* <Route path="/userprofile" component={UserProfile} /> */}
          {/* <Route path="/reportissue" component={ReportIssue} /> */}
          {/* <Route path="/myreport" component={MyReport} /> */}
          <Route path="/submitreport" component={SubmitReport}/>
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
