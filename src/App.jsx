import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./Pages/Index.jsx";
import About from "./Pages/About.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
