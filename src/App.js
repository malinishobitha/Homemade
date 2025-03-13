import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CustomNavbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Soap from "./components/soap";


function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soap" element={<Soap />} />
          {/* <Route path="/contact" element={<Contact />} /> */} 
        </Routes>
        
      </div>
      <Footer />
    </Router>
  );
}

export default App;
