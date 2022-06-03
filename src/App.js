import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";
import HeroBlock from "./components/HeroBlock";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
function App() {

  return (
    <div>
      <HashRouter>
      <Navbar />
        <Routes>
          <Route path="/" 
          element={
            <div>
            <HeroBlock />
            <AboutMe />
            <Blog />
            <Contact />
            <Portfolio/>
            </div>
          }>
          </Route>
        </Routes>
        <Footer/>
      </HashRouter>
      
    </div>
  );
}

export default App;
