import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { FooterComp } from "./components/FooterComp";
import BarGraph from "./pages/BarGraph";
import LineGraph from "./pages/LineGraph";
import PieGraph from "./pages/PieGraph";
import HeaderComp from "./components/HeaderComp";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComp />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/bardata' element={<BarGraph />} />
          <Route path='/linedata' element={<LineGraph />} />
          <Route path='/piedata' element={<PieGraph />} />
        </Routes>
        <FooterComp />
      </BrowserRouter>
    </div>
  );
}
