import React from 'react';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';

import NavDrawer from '../NavDrawer';

import hiraganaData from '../../assets/hiraganaData.json';

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

function HiraganaPractice() {
    const [ , setSelectedPairs] = useState<{ id: number; hiragana: string; pronunciation: string; }[]>([]);
    const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

    const pronunciationData = hiraganaData.map(hiragana => ({
        id: hiragana.id + hiraganaData.length, // Assign unique IDs for pronunciation cards
        hiragana: hiragana.hiragana,
        pronunciation: hiragana.pronunciation,
    }));

    useEffect(() => {
        // Select 12 random pairs from the hiragana data
        const shuffledData = hiraganaData.sort(() => Math.random() - 0.5);
        const selectedPairs = shuffledData.slice(0, 12);
        setSelectedPairs(selectedPairs.concat(selectedPairs)); // Duplicate pairs for matching
    }, []);

    const handleCardClick = (id: number) => {
        const cardElement = document.getElementById(`card-${id}`); // Assuming the card element has an id like "card-1", "card-2", etc.
        if (cardElement) {
            cardElement.classList.toggle('clicked');
        }

        if (selectedCardId === null) {
            // First card clicked, set it as the selected card
            setSelectedCardId(id);
        } else {
            // Second card clicked, check for a match
            const isFirstCardHiragana = selectedCardId <= hiraganaData.length;
            const isSecondCardHiragana = id <= hiraganaData.length;

            // Check if both cards are hiragana symbols or both pronunciations
            const areBothHiragana = isFirstCardHiragana && isSecondCardHiragana;
            const areBothPronunciations = !isFirstCardHiragana && !isSecondCardHiragana;

            if (areBothHiragana || areBothPronunciations) {
                // Reset selected cards
                const clickedElements = document.querySelectorAll('.clicked');
                    // remove click and shake
                    clickedElements.forEach(element => {
                        if (cardElement) {
                            element.classList.add('shake');
                            setTimeout(() => {
                                element.classList.remove('shake');
                            }, 500);
                        }
                        element.classList.remove('clicked');
                    });
                setSelectedCardId(null);
                return;
            }
    
            if (isFirstCardHiragana !== isSecondCardHiragana) { 
                // Check if the two cards have the same hiragana/pronunciation pair
                const isFirstCardHiraganaId = isFirstCardHiragana ? selectedCardId : selectedCardId - hiraganaData.length;
                const isSecondCardHiraganaId = isSecondCardHiragana ? id : id - hiraganaData.length;
    
                if (isFirstCardHiraganaId === isSecondCardHiraganaId) { // match
                    // Match found
                    const clickedElements = document.querySelectorAll('.clicked');
                    clickedElements.forEach(element => {
                        element.classList.add('match');
                        element.classList.remove('clicked');
                        document.querySelectorAll('.char-card.match').forEach(card => {
                            card.addEventListener('animationend', () => {
                                card.remove(); // Remove the card element from the DOM when the animation ends
                            });
                        });
                    });
                } else { // no match
                    // No match, reset selected card
                    const clickedElements = document.querySelectorAll('.clicked');
                    // remove click and shake
                    clickedElements.forEach(element => {
                        if (cardElement) {
                            element.classList.add('shake');
                            setTimeout(() => {
                                element.classList.remove('shake');
                            }, 500);
                        }
                        element.classList.remove('clicked');
                    });
                }
            }
            // Reset selected card
            setSelectedCardId(null);
        }
    };

    return (
        <div style={{ display: 'flex', maxWidth: '100vw', overflow: 'hidden', }}>
            <ThemeProvider theme={theme}>
                <NavDrawer />
                <div style={{ flex: 1, overflowX: 'auto', margin: '0 1%' }}>
                    <h2 className="title">Hiragana</h2>

                    <div className="card-grid">
                        <Grid container spacing={1}>
                            {hiraganaData.slice(0, 12).map((card, index) => (
                                <React.Fragment key={card.id}>
                                    <Grid item xs={3} sm={3} md={2} lg={2} onClick={() => handleCardClick(card.id)}>
                                        <Card id={`card-${card.id}`} className='char-card' style={{ height: '10vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <CardContent className='matching-text'>{card.hiragana}</CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={2} lg={2} onClick={() => handleCardClick(card.id + hiraganaData.length)}>
                                        <Card id={`card-${card.id + hiraganaData.length}`} className='char-card' style={{ height: '10vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <CardContent className='matching-text'>{pronunciationData[index].pronunciation}</CardContent>
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