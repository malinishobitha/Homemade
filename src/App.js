import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CustomNavbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Soap from "./components/soap";
import Oil from './components/oil';
import Shampoo from './components/shampoo';
import Candle from './components/candle';
import Pickle from './components/pickle'
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
      setCart((prevCart) => {
          const existingItem = prevCart.find((item) => item.id === product.id);
          if (existingItem) {
              return prevCart.map((item) =>
                  item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
              );
          } else {
              return [...prevCart, { ...product, quantity: 1 }];
          }
      });
  };
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soap" element={<Soap />} />
          <Route path="/oil" element={<Oil />} /> 
          <Route path='/shampoo' element={<Shampoo />} />
          <Route path='/candle' element={<Candle />} />
          <Route path='/pickle' element={<Pickle />} />
        </Routes>
        
      </div>
      <Footer />
    </Router>
  );
}

export default App;
