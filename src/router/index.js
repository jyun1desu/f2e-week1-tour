import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "layout/Home";

export default function index() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
