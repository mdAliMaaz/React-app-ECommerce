import React from 'react'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'

import { Routes, Route, Navigate } from 'react-router-dom'



const App = () => {
  const user = true;
  return (
    <>

      <Routes>
        <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
        <Route path='/register' element={user ? <Navigate to="/" /> : <Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='products/:id' element={<Product />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
