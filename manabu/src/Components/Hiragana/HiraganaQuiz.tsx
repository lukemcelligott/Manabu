import { SetStateAction, useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import { FormControl, FormControlLabel } from '@mui/material';
import { RadioGroup, Radio } from '@mui/material';

import NavDrawer from '../NavDrawer';

import hiraganaData from '../../assets/hiraganaData.json';

import '../Styles/Alpha.css';

const theme = createTheme({
    palette: {
      primary: {
        main: '#f96d00',
      },
    },
});

const shuffleArray = (array: typeof hiraganaData) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const shuffledQuizData = shuffleArray(hiraganaData);
const selectedQuizQuestions = shuffledQuizData.slice(0, 10);

function HiraganaQuiz() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [showFeedback, setShowFeedback] = useState(false);
    const [endOfQuiz, setEndOfQuiz] = useState(false);

    // handle radio selections
    const handleOptionSelect = (option: SetStateAction<string>) => {
        setSelectedOption(option);
    };

    // check quiz answers, T for correct, F for wrong
    const checkAnswer = () => {
        const correctAnswer = hiraganaData[currentQuestion].pronunciation;
        return selectedOption === correctAnswer;
    };

    // keep track of quiz grade and assign feedback values
    const gradeAnswer = () => {
        const isCorrect = checkAnswer();
        if (isCorrect) {
             // Update user's score and provide feedback for correct answer
            setScore(score + 1);
            setFeedbackMessage('Correct!'); 
        } else {
            // Provide feedback for incorrect answer
            setFeedbackMessage(`Incorrect. The correct answer is ${selectedQuizQuestions[currentQuestion].pronunciation}.`);
        }
        setShowFeedback(true);
    }

    // display the next question
    const handleNextQuestion = () => {
        if (currentQuestion !== (selectedQuizQuestions.length - 1)) {
            setSelectedOption(''); // Reset selected option for the next question
            setCurrentQuestion(currentQuestion + 1); // Move to the next question
            setShowFeedback(false);
        } else {
            setEndOfQuiz(true);
        }
    };

    const handleRestart = () => {
        window.location.reload(); // Reloads the page
      };

    return (
        <div style={{ display: 'flex', maxWidth: '100vw', overflow: 'hidden', }}>
            <ThemeProvider theme={theme}>
                <NavDrawer />
                <div style={{ flex: 1, overflowX: 'auto', margin: '0 1%' }}>
                    <h2 className="title">Hiragana</h2>

                    <Card sx={{ minWidth: 275, minHeight: 350 }} className="main card">
                        <CardContent className='card-text'>

                            {/* display questions */}
                            {!endOfQuiz && (
                                <div className='content-color'>
                                    <p>Match the Hiragana character to its phonetic spelling!</p>
                                    <p>Question {currentQuestion + 1}/{selectedQuizQuestions.length}</p>
                                    <p>{selectedQuizQuestions[currentQuestion].hiragana}</p>
                                    {selectedQuizQuestions[currentQuestion].options.map((option, index) => (
                                        <div key={index}>
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue="female"
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel
                                                        id={option}
                                                        name="pronunciation"
                                                        value={option}
                                                        control={<Radio />}
                                                        label={option}
                                                        checked={selectedOption === option}
                                                        onChange={() => handleOptionSelect(option)}/>
                                                </RadioGroup>
                                            </FormControl>
                                        </div>
                                    ))}

                                    {!showFeedback && (
                                        <Button onClick={gradeAnswer} variant="outlined" color="primary" className='abc-select'>Submit</Button>
                                    )}
                                </div>
                            )}

                            {showFeedback && !endOfQuiz && (
                                <div className='content-color'>
                                    <p>{feedbackMessage}</p>
                                    <Button onClick={handleNextQuestion} variant="outlined" color="primary" className='abc-select'>Next</Button>
                                </div>
                            )}

                            {/* display quiz results */}
                            {endOfQuiz && (
                                <div className='content-color'>
                                    <p>Quiz Complete!</p>
                                    <p>Your score: {score}/{selectedQuizQuestions.length}</p>
                                    <Button onClick={handleRestart} variant="outlined" color="primary" className='abc-select'>Retake Quiz</Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </ThemeProvider>
        </div>
    )
}

export default HiraganaQuiz;