import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "layout/Home";
import Search from "layout/Search";

export default function index() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
  );
}
