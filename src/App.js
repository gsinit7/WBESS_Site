import './App.css';

import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Home from './Pages/Home'
import About from './Pages/About'
import Membership from './Pages/Membership'
import Gallery from './Pages/Gallery'
import Events from './Pages/Events'
import Contact from './Pages/Contact'
import NoPage from './Pages/NoPage'


export default function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className="Pages">
            <Routes className="Page" >
              <Route className="page" index element={<Home />} />
              <Route className="page" path="/home" element={<Home />} />
              <Route className="page" path="/about" element={<About />} />
              <Route className="page" path="/gallery" element={<Gallery />} />
              <Route className="page" path="/events" element={<Events />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}


