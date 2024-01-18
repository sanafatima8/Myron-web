import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import Store from "./Pages/Home/Store/Store";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Store" element={<Store />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes> 
        </div>
      </Router>
    </div>
  );
}

export default App;
