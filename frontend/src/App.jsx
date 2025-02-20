/* eslint-disable no-unused-vars */

import './App.css';

import React from 'react';
import {Login,Signup,Home, CreateProduct, MyProducts, ProductDetails} from "./Routes/Routes"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cart from './pages/cart';
function App() {
  return (
    <>
    <BrowserRouter>
    

{/* <nav className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 shadow-lg">
  <div className="container mx-auto flex justify-between items-center">
    <h1 className="text-white text-2xl font-bold">BuyCart</h1>
    <div className="space-x-6">
      <Link to="/" className="text-white font-semibold hover:text-gray-200 transition duration-300">Home</Link>
      <Link to="/login" className="text-white font-semibold hover:text-gray-200 transition duration-300">Login</Link>
      <Link to="/create-user" className="text-white font-semibold hover:text-gray-200 transition duration-300">Signup</Link>
      <Link to="/create-product" className="text-white font-semibold hover:text-gray-200 transition duration-300">Create Product</Link>
      <Link to="/my-products" className="text-white font-semibold hover:text-gray-200 transition duration-300">My Products</Link>
    </div>
  </div>
</nav> */}


    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/create-user' element={<Signup/>}/>
    <Route path='/create-product' element={<CreateProduct/>}/>  
    {/* For edit product by id */}
    <Route path="/create-product/:id" element={<CreateProduct />} />
    <Route path="/my-products" element={<MyProducts/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/product/:id" element={<ProductDetails/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
