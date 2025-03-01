import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Orders from './pages/Orders'
import Login from './components/Login'

const App = () => {
  return (
    <div className=' bg-gradient-to-b from-teal-50 to-orange-50'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/my-orders' element={<Orders />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>

  )
}

export default App
