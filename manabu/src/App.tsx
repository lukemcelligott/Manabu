import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SelectedOptionProvider } from './Components/AlphaContext';

import HomePage from './Components/HomePage';

import HiraganaLearn from './Components/Hiragana/HiraganaLearn';
import HiraganaQuiz from './Components/Hiragana/HiraganaQuiz';
import HiraganaPractice from './Components/Hiragana/HiraganaPractice';

import KatakanaLearn from './Components/Katakana/KatakanaLearn';
import KatakanaQuiz from './Components/Katakana/KatakanaQuiz';

function App() {

  return (
    <>
      <BrowserRouter>
        <SelectedOptionProvider>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          
          <Route path="/hiragana/learn" element={<HiraganaLearn />} />
          <Route path="/hiragana/quiz" element={<HiraganaQuiz />} />
          <Route path="/hiragana/practice" element={<HiraganaPractice />} />

          <Route path="/katakana/learn" element={<KatakanaLearn />} />
          <Route path="/katakana/quiz" element={<KatakanaQuiz />} />

          <Route path='/' element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        </SelectedOptionProvider>
      </BrowserRouter>
    </>
  )
}

export default App
