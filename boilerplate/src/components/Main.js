import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <footer>This is the main footer</footer>
    </div>
  );
};

export default Main;
