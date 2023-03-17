import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


// import Layout from "./pages/Layout";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Header from "./Component/header";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='' element={<AboutUs />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
