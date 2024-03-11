import React from 'react';
import { SetStateAction, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, Grid } from '@mui/material';
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
        background: {
            paper: '#393e46',
        }
    },
});

interface HiraganaCard {
    hiragana: string;
    pronunciation: string;
}

function HiraganaPractice() {
    const cards: HiraganaCard[] = [
        { hiragana: 'あ', pronunciation: 'a'},
        { hiragana: 'い', pronunciation: 'i'},
        { hiragana: 'う', pronunciation: 'u'},
        { hiragana: 'え', pronunciation: 'e'},
        { hiragana: 'お', pronunciation: 'o'},
        { hiragana: 'か', pronunciation: 'ka'},
        { hiragana: 'き', pronunciation: 'ki'},
        { hiragana: 'く', pronunciation: 'ku'},
        { hiragana: 'け', pronunciation: 'ke'},
        { hiragana: 'こ', pronunciation: 'ko'},
        { hiragana: 'さ', pronunciation: 'sa'},
        { hiragana: 'し', pronunciation: 'shi'},
        { hiragana: 'す', pronunciation: 'su'},
        { hiragana: 'せ', pronunciation: 'se'},
        { hiragana: 'そ', pronunciation: 'so'},
        { hiragana: 'た', pronunciation: 'ta'},
        { hiragana: 'ち', pronunciation: 'chi'},
        { hiragana: 'つ', pronunciation: 'tsu'},
        { hiragana: 'て', pronunciation: 'te'},
        { hiragana: 'と', pronunciation: 'to'},
        { hiragana: 'な', pronunciation: 'na'},
        { hiragana: 'に', pronunciation: 'ni'},
        { hiragana: 'ぬ', pronunciation: 'nu'},
        { hiragana: 'ね', pronunciation: 'ne'},
        { hiragana: 'の', pronunciation: 'no'},
        { hiragana: 'は', pronunciation: 'ha'},
        { hiragana: 'ひ', pronunciation: 'hi'},
        { hiragana: 'ふ', pronunciation: 'fu'},
        { hiragana: 'へ', pronunciation: 'he'},
        { hiragana: 'ほ', pronunciation: 'ho'},
        { hiragana: 'ま', pronunciation: 'ma'},
        { hiragana: 'み', pronunciation: 'mi'},
        { hiragana: 'む', pronunciation: 'mu'},
        { hiragana: 'め', pronunciation: 'me'},
        { hiragana: 'も', pronunciation: 'mo'},
        { hiragana: 'や', pronunciation: 'ya'},
        { hiragana: 'ゆ', pronunciation: 'yu'},
        { hiragana: 'よ', pronunciation: 'yo'},
        { hiragana: 'ら', pronunciation: 'ra'},
        { hiragana: 'り', pronunciation: 'ri'},
        { hiragana: 'る', pronunciation: 'ru'},
        { hiragana: 'れ', pronunciation: 're'},
        { hiragana: 'ろ', pronunciation: 'ro'},
        { hiragana: 'わ', pronunciation: 'wa'},
        { hiragana: 'を', pronunciation: 'wo'},
        { hiragana: 'ん', pronunciation: 'n'},
    ];

    const [shuffledPairs, setShuffledPairs] = useState<HiraganaCard[]>([]);

    // Function to shuffle an array
    const shuffleArray = (array: any[]) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    // Shuffle the pairs when component mounts
    useEffect(() => {
        setShuffledPairs(shuffleArray(cards));
    }, []);

    
    const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
    const [matchedIndices, setMatchedIndices] = useState<number[]>([]);
    const [firstCardIndex, setFirstCardIndex] = useState<number | null>(null);
    const [secondCardIndex, setSecondCardIndex] = useState<number | null>(null);
    const [selectedHiraganaIndex, setSelectedHiraganaIndex] = useState(-1);
    const [selectedPronunciationIndex, setSelectedPronunciationIndex] = useState(null);
    const [matchedPairs, setMatchedPairs] = useState<number[]>([]);

    const handleCardClick = (index: number, type: String) => {
        if (type === 'hiragana') {
            setSelectedHiraganaIndex(index);
        } else if (type === 'pronunciation' && selectedHiraganaIndex !== null) {
            const hiraganaPairIndex = selectedHiraganaIndex % 100;
            if (hiraganaPairIndex === index) {
                // Correct match
                // Mark both cards as green
                console.log("match");
                // setMatchedPairs(prevState => {
                //     const updatedPairs = [...prevState];
                //     return updatedPairs;
                // });
                setMatchedPairs([...matchedPairs, index]);
                console.log(matchedPairs);
            } else {
                // Incorrect match
                // Mark both cards as red
                console.log("wrong");
                setMatchedPairs([...matchedPairs, index]);
                // setMatchedPairs(prevState => {
                //     const updatedPairs = [...prevState];
                //     return updatedPairs;
                // });
            }
            // Reset selected cards
            setSelectedHiraganaIndex(-1);
            setSelectedPronunciationIndex(null);
        }
    };

    const isMatched = (index: number) => {
        let matched : boolean;
        if(index){
           matched = matchedPairs.includes(matchedPairs[index]);
           return matched;
        }
        return false;
    };

    useEffect(() => {
        // Check if there are any newly matched pairs
        if (matchedIndices.length > 0) {
            // Reset selected indices after a delay
            setTimeout(() => {
                setSelectedIndices([]);
                setFirstCardIndex(null);
                setSecondCardIndex(null);
            }, 1000);
        }
    }, [matchedIndices]);

    return (
        <div style={{ display: 'flex', maxWidth: '100vw', overflow: 'hidden', }}>
            <ThemeProvider theme={theme}>
                <NavDrawer />
                <div style={{ flex: 1, overflowX: 'auto', margin: '0 1%' }}>
                    <h2 className="title">Hiragana</h2>

                    <div className="card-grid">

                    <Grid container spacing={2}>
        {shuffledPairs.slice(0, 12).map((pair, index) => (
            <React.Fragment key={index}>
                <Grid item xs={3} sm={3} md={2} lg={2}>
                    <Card onClick={() => handleCardClick(index, 'hiragana')} style={{ backgroundColor: isMatched(index) ? 'green' : 'black' }}>
                        <CardContent className='card-text content-color'>
                            <div>{pair.hiragana}</div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} sm={3} md={2} lg={2}>
                    <Card onClick={() => handleCardClick(index, 'pronunciation')} style={{ backgroundColor: isMatched(index) ? 'green' : 'black' }}>
                        <CardContent className='card-text content-color'>
                            <div>{pair.pronunciation}</div>
                        </CardContent>
                    </Card>
                </Grid>
            </React.Fragment>
        ))}
    </Grid>
                    </div>
                </div>
            </ThemeProvider>
        </div>
    )
}

export default HiraganaPractice;