import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbaar from "./components/Navbaar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Myorder from "./components/Myorder";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <Router>
        <Navbaar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/myorder" element={<Myorder />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
