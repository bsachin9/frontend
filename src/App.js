import React from "react";
import Login from './Login.js'
import Signup from './Signup.js'
import HomePage from './HomePage.js'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/home" element={<HomePage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
