import React from "react";
import "./App.css";

import ProjectDetails from "./components/ProjectDetails.jsx";
import { Route,Routes } from "react-router-dom";
import Landing from "./components/Landing.jsx";

export default function App() {
  return (
    <>
      
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/projectDetails" element={<ProjectDetails/>}/>
    </Routes>
    </>
  );
}
