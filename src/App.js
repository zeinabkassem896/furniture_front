import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from './pages/About/About';
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product/Product";

import "./App.css";

function App() {

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App;
