import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { SelectedOptionProvider } from './Components/AlphaContext';
import HomePage from './Components/HomePage';
import HiraganaLearn from './Components/Hiragana/HiraganaLearn';

function App() {

  return (
    <>
      <BrowserRouter>
        <SelectedOptionProvider>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          
          <Route path="/hiragana/learn" element={<HiraganaLearn />} />
          
          <Route path='/' element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        </SelectedOptionProvider>
      </BrowserRouter>
    </>
  )
}

export default App
