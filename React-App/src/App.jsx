import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componant/Home";
import Login from "./componant/auth/Login";
import Signup from "./componant/auth/Signup";
import DetailsCard from "./componant/DetailsCard";
import Navbar from "./componant/Navbar";
import Footer from "./componant/Footer";
import Profile from "./componant/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Card/:id" element={<DetailsCard />} />
        <Route path="/Profile/:id" element={<Profile />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
