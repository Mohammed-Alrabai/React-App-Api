import { background } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import Card from "./Card";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <Footer />
    </>
  );
}

export default Home;
