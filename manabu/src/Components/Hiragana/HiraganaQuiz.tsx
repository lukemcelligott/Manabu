import { SetStateAction, useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';

import NavDrawer from '../NavDrawer';

import '../Styles/Alpha.css';

function HiraganaQuiz() {

    // quiz Q & As
    const quizData = [
        { hiragana: 'あ', pronunciation: 'a', options: ['a', 'i', 'u', 'e', 'o'] },
        { hiragana: 'い', pronunciation: 'i', options: ['a', 'i', 'u', 'e', 'o'] },
        // Add more quiz questions as needed
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (option: SetStateAction<string>) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        // Handle checking the answer and moving to the next question
        // Update state variables as needed
    };

    return (
        <div style={{ display: 'flex', maxWidth: '100vw', overflow: 'hidden' }}>
            <NavDrawer />
            <div style={{ flex: 1, overflowX: 'auto', margin: '0 1%' }}>
                <h2 className="title">Hiragana</h2>
                <Card sx={{ minWidth: 275 }} className="main card">
                    <CardContent className='card-text'>
                        <p>{quizData[currentQuestion].hiragana}</p>
                        {quizData[currentQuestion].options.map((option, index) => (
                            <div key={index}>
                                <input
                                    type="radio"
                                    id={option}
                                    name="pronunciation"
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={() => handleOptionSelect(option)}
                                />
                                <label htmlFor={option}>{option}</label>
                            </div>
                        ))}
                        <Button variant="outlined" color="primary" className='abc-select'>
                            Next
                        </Button> 
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default HiraganaQuiz;