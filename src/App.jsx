import React from "react";
import Navbar from "./components/Navbar";
import Product from "./components/product";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import SearchItem from "./components/SearchItem";
import { items } from "./components/data1";
import { useState } from "react";


 const App=()=>{
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return(
    <>
      <Router>
      <Navbar cart={cart} setData={setData}></Navbar>
      <Routes>
          <Route path="/" element={<Product items={data}></Product>}></Route>
          
          <Route path="/product/:id" element={<ProductDetail></ProductDetail>}></Route>
          <Route path="/search/:term" element={<SearchItem></SearchItem>}></Route>
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}></Cart>}></Route>
      </Routes>
      {/* <Product></Product> */}
      </Router>
    </>
  );
 };

export default App;