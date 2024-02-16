import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SelectedOptionProvider } from './Components/AlphaContext';

import HomePage from './Components/HomePage';

import HiraganaLearn from './Components/Hiragana/HiraganaLearn';

import KatakanaLearn from './Components/Katakana/KatakanaLearn';

function App() {

  return (
    <>
      <BrowserRouter>
        <SelectedOptionProvider>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          
          <Route path="/hiragana/learn" element={<HiraganaLearn />} />

          <Route path="/katakana/learn" element={<KatakanaLearn />} />

          <Route path='/' element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        </SelectedOptionProvider>
      </BrowserRouter>
    </>
  )
}

export default App
