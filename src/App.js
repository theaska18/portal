import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import 'materialize-css/dist/js/materialize.min.js';
import logo from './logo.svg';

import NavPortal from "./pages/components/NavPortal";
import Footer from "./pages/components/Footer";
import MainPortal from "./pages/portal/main/Main";
import ContactPortal from "./pages/portal/contact/Main";
import AboutPortal from "./pages/portal/about/Main";

function App() {
  useEffect(() => {
    document.title = "Welcome";
  }, []);
  return (
    <>
    <div className="App">
      <NavPortal />
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPortal />} />
            <Route path="contact" element={<ContactPortal />}/>
            <Route path="about" element={<AboutPortal />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
    </>
  );
}
export default App;