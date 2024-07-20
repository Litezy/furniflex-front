import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Hompage/Home';
import ABoutPage from './Hompage/ABoutPage';
import Products from './Hompage/Products';
import Category from './Hompage/Category';
import Contact from './Hompage/Contact';
import Blogs from './Hompage/Blogs';
import ShopCart from './Hompage/ShopCart';
import SelectProvider from './context/SelectContext';
import Billing from './Hompage/Billing';
import CheckoutSuccess from './Hompage/CheckoutSuccess';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';



function App() {



  useEffect(() => {

  }, [])
  return (
    <>
      <div className="w-full h-full">
        <SelectProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<ShopCart />} />
              <Route path='/cart/billing' element={<Billing />} />
              <Route path='/cart/billing/checkout' element={<CheckoutSuccess />} />
              <Route path='/about' element={<ABoutPage />} />
              <Route path='/products' element={<Products />} />
              <Route path='/category' element={<Category />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/login' element={<Login />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </Router>
        </SelectProvider>


      </div>
    </>
  )
}

export default App
