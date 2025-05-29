import React from 'react'
import { BrowserRouter , Router, Route, Routes ,NavLink } from 'react-router-dom'
import { ProductProvider } from '../src/ProductContext'
import Home from './Home'
import ProductDetails from './ProductDetails'
import ProductLists from './ProductLists'
import Cart from './Cart'
import Navbar from './Navbar'
import Register from './Register'
import Login from './Login'
import Checkout from './Checkout'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <ProductProvider>
      <Routes>
        <Route path='/' element={<ProductLists />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </ProductProvider>
    </BrowserRouter>
  )
}

export default App