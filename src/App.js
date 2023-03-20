import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


// import Layout from "./pages/Layout";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Team from "./Pages/Team";
import Header from "./Component/header";

import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route index element={<Home />} />
          <Route path='Aboutus' element={<AboutUs />} />
          <Route path='Team' element={<Team />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
