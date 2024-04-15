import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Sorting from './pages/Sorting'
import PathFinding from './pages/PathFinding'
import Header from './Components/Header'
import Footer from './Components/Footer'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sorting" element={<Sorting />} />
        <Route path="/path-finding" element={<PathFinding />} />
      </Routes>
      <Footer/>
    
    </BrowserRouter>

    
  )
}
