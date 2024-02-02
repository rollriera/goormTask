import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";
import Home from "./pages/home";
import Product from "./pages/product";
import Basket from "./pages/basket";
import { useState } from "react";

function App() {
   const [product, setProducts] = useState([]);
   const [cart, setCart] = useState([]);
   const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   }
  return (
    <BrowserRouter>
      <TopNavigationBar />
      <Routes>
        <Route 
        path="/" 
        element={<
          Home 
          products={product} 
          setProducts={setProducts} 
          convertPrice={convertPrice}
          />} 
        />
        <Route 
        path="/product/:id" 
        element={<Product 
          convertPrice={convertPrice} 
          cart={cart} 
          setCart={setCart}/>} 
        />
        <Route path="/cart" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
