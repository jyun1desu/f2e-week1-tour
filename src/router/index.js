import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "layout/Home";
import Search from "layout/Search";
import Spot from "layout/Spot";
import City from "layout/City";

export default function index() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/spot/:id" element={<Spot />} />
        <Route path="/city/:id" element={<City />} />
      </Routes>
  );
}
