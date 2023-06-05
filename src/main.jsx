import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/app.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Navbar from './components/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
)
