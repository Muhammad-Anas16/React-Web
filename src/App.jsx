import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Testimonial from "./Components/Testimonial";
import { Products } from "./FetchAPI/products";

console.log(Products);

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonial />
    </>
  );
}

export default App;
