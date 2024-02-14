import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from './Components/HomePage';
import HiraganaLearn from './Components/Hiragana/HiraganaLearn';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/hiragana" element={<HiraganaLearn />} />
          
          <Route path='/' element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
