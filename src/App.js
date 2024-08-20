import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import logo from './logo.svg';

import NavPortal from "./pages/components/NavPortal";
import MainPortal from "./pages/portal/main/Main";
import ContactPortal from "./pages/portal/contact/Main";
import AboutPortal from "./pages/portal/about/Main";

function App() {
  useEffect(() => {
    document.title = "Welcome";
  }, []);
  return (
    <>
      <NavPortal />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPortal />} />
        <Route path="contact" element={<ContactPortal />}/>
        <Route path="about" element={<AboutPortal />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;