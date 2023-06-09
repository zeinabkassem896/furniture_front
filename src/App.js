import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "./Context";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from './pages/About/About';
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product/Product";
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from "./pages/Cart/Cart"

import "./App.css";

function App() {

  const [ path, setPath ] = useState('/');
	
	const dispatchUserEvent = ( payload) => {
    setPath(payload)
	};

  return (
    <AppContext.Provider value={{ path, dispatchUserEvent }}>    <div className="App">
      <Header/>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      <Footer/>
    </div>
    </AppContext.Provider>
  )
}

export default App;
