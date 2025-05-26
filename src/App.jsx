import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Pages/Home";
import SignUp from "./Components/Form/SignUp";
import Login from "./Components/Form/Login";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import { Route, Routes } from "react-router";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const products = useSelector((state) => state.products.items);

  const dispatch = useDispatch();

  if (!products || products.lenght == 0) {
    console.log("No Products Available");
  } else {
    products.mao((prod) => console.log(prod));
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default App;
