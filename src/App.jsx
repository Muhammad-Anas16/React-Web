import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Pages/Home";
import { Products } from "./TenStack/Product";

const App = () => {
  const { data, isLoading, isFetching, refetch } = Products();

  useEffect(() => {
    console.log("isLoading => ", isLoading);
    console.log("data => ", data);
  }, [isLoading, data]);

  return (
    <>
      <Header />
      <HomePage />
    </>
  );
};

export default App;
