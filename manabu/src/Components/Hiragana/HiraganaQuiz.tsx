import { SetStateAction, useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import { FormControl, FormControlLabel } from '@mui/material';
import { RadioGroup, Radio } from '@mui/material';

import NavDrawer from '../NavDrawer';

import '../Styles/Alpha.css';

const theme = createTheme({
    palette: {
      primary: {
        main: '#f96d00',
      },
    },
});

interface QuizDataItem {
    hiragana: string;
    pronunciation: string;
    options: string[];
}

// quiz Q & As
const quizData : QuizDataItem[] = [
    { hiragana: 'あ', pronunciation: 'a', options: ['a', 'i', 'u', 'e', 'o'] },
    { hiragana: 'い', pronunciation: 'i', options: ['i', 'e', 'u', 'a', 'o'] },
    { hiragana: 'う', pronunciation: 'u', options: ['u', 'a', 'i', 'e', 'o'] },
    { hiragana: 'え', pronunciation: 'e', options: ['e', 'o', 'a', 'i', 'u'] },
    { hiragana: 'お', pronunciation: 'o', options: ['o', 'u', 'a', 'i', 'e'] },
    { hiragana: 'か', pronunciation: 'ka', options: ['ka', 'ki', 'ku', 'ke', 'ko'] },
    { hiragana: 'き', pronunciation: 'ki', options: ['ki', 'ke', 'ko', 'ka', 'ku'] },
    { hiragana: 'く', pronunciation: 'ku', options: ['ku', 'ka', 'ke', 'ki', 'ko'] },
    { hiragana: 'け', pronunciation: 'ke', options: ['ke', 'ko', 'ki', 'ka', 'ku'] },
    { hiragana: 'こ', pronunciation: 'ko', options: ['ko', 'ku', 'ke', 'ki', 'ka'] },
    { hiragana: 'さ', pronunciation: 'sa', options: ['sa', 'shi', 'su', 'se', 'so'] },
    { hiragana: 'し', pronunciation: 'shi', options: ['shi', 'su', 'se', 'so', 'sa'] },
    { hiragana: 'す', pronunciation: 'su', options: ['su', 'se', 'so', 'sa', 'shi'] },
    { hiragana: 'せ', pronunciation: 'se', options: ['se', 'so', 'sa', 'shi', 'su'] },
    { hiragana: 'そ', pronunciation: 'so', options: ['so', 'sa', 'shi', 'su', 'se'] },
    { hiragana: 'た', pronunciation: 'ta', options: ['ta', 'chi', 'tsu', 'te', 'to'] },
    { hiragana: 'ち', pronunciation: 'chi', options: ['chi', 'tsu', 'te', 'to', 'ta'] },
    { hiragana: 'つ', pronunciation: 'tsu', options: ['tsu', 'te', 'to', 'ta', 'chi'] },
    { hiragana: 'て', pronunciation: 'te', options: ['te', 'to', 'ta', 'chi', 'tsu'] },
    { hiragana: 'と', pronunciation: 'to', options: ['to', 'ta', 'chi', 'tsu', 'te'] },
    { hiragana: 'な', pronunciation: 'na', options: ['na', 'ni', 'nu', 'ne', 'no'] },
    { hiragana: 'に', pronunciation: 'ni', options: ['ni', 'nu', 'ne', 'no', 'na'] },
    { hiragana: 'ぬ', pronunciation: 'nu', options: ['nu', 'ne', 'no', 'na', 'ni'] },
    { hiragana: 'ね', pronunciation: 'ne', options: ['ne', 'no', 'na', 'ni', 'nu'] },
    { hiragana: 'の', pronunciation: 'no', options: ['no', 'na', 'ni', 'nu', 'ne'] },
    { hiragana: 'は', pronunciation: 'ha', options: ['ha', 'hi', 'fu', 'he', 'ho'] },
    { hiragana: 'ひ', pronunciation: 'hi', options: ['hi', 'fu', 'he', 'ho', 'ha'] },
    { hiragana: 'ふ', pronunciation: 'fu', options: ['fu', 'he', 'ho', 'ha', 'hi'] },
    { hiragana: 'へ', pronunciation: 'he', options: ['he', 'ho', 'ha', 'hi', 'fu'] },
    { hiragana: 'ほ', pronunciation: 'ho', options: ['ho', 'ha', 'hi', 'fu', 'he'] },
    { hiragana: 'ま', pronunciation: 'ma', options: ['ma', 'mi', 'mu', 'me', 'mo'] },
    { hiragana: 'み', pronunciation: 'mi', options: ['mi', 'mu', 'me', 'mo', 'ma'] },
    { hiragana: 'む', pronunciation: 'mu', options: ['mu', 'me', 'mo', 'ma', 'mi'] },
    { hiragana: 'め', pronunciation: 'me', options: ['me', 'mo', 'ma', 'mi', 'mu'] },
    { hiragana: 'も', pronunciation: 'mo', options: ['mo', 'ma', 'mi', 'mu', 'me'] },
    { hiragana: 'や', pronunciation: 'ya', options: ['ya', 'yu', 'yo'] },
    { hiragana: 'ゆ', pronunciation: 'yu', options: ['yu', 'yo', 'ya'] },
    { hiragana: 'よ', pronunciation: 'yo', options: ['yo', 'ya', 'yu'] },
    { hiragana: 'ら', pronunciation: 'ra', options: ['ra', 'ri', 'ru', 're', 'ro'] },
    { hiragana: 'り', pronunciation: 'ri', options: ['ri', 'ru', 're', 'ro', 'ra'] },
    { hiragana: 'る', pronunciation: 'ru', options: ['ru', 're', 'ro', 'ra', 'ri'] },
    { hiragana: 'れ', pronunciation: 're', options: ['re', 'ro', 'ra', 'ri', 'ru'] },
    { hiragana: 'ろ', pronunciation: 'ro', options: ['ro', 'ra', 'ri', 'ru', 're'] },
    { hiragana: 'わ', pronunciation: 'wa', options: ['wa', 'wo', 'n'] },
    { hiragana: 'を', pronunciation: 'wo', options: ['wo', 'wa', 'n'] },
    { hiragana: 'ん', pronunciation: 'n', options: ['ne', 'wo', 'n'] },
];

const shuffleArray = (array: QuizDataItem[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const shuffledQuizData = shuffleArray(quizData);
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
        const correctAnswer = quizData[currentQuestion].pronunciation;
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