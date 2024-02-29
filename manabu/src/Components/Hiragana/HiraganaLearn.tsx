import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Modal } from '@mui/material';
import Grid from '@mui/material/Grid';

import NavDrawer from "../NavDrawer";

import '../Styles/Alpha.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
        paper: '#393e46',
    }
  },
});

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #393E46',
    boxShadow: 24,
    p: 4,
};

interface CardData {
    id: number;
    text: string;
    phonetic: string;
    examples: string[];
}

function HiraganaLearn() {
    const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (card: CardData) => {
        setSelectedCard(card);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedCard(null);
        setIsModalOpen(false);
    };

    const cards: CardData[] = [
        // {
        //     ID
        //     Hiragana character
        //     Phonetic spelling
        //     Examples
        // },
        {
            id: 1,
            text: 'あ',
            phonetic: 'a',
            examples: ['あめ - rain', 'ありがとう - thank you'],
        },
        {
            id: 2,
            text: 'い',
            phonetic: 'i',
            examples: ['はい - yes', 'いいえ - no'],
        },
        {
            id: 3,
            text: 'う',
            phonetic: 'u',
            examples: ['うみ - sea', 'うま - horse'],
        },
        {
            id: 4,
            text: 'え',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 5,
            text: 'お',
            phonetic: 'o',
            examples: ['おりがみ - origami', 'おちゃ - tea'],
        },
        {
            id: 6,
            text: 'か',
            phonetic: 'ka',
            examples: ['いつか - someday', 'かばん - bag'],
        },
        {
            id: 7,
            text: 'き',
            phonetic: 'ki',
            examples: ['がき - brat', 'きつね - fox'],
        },
        {
            id: 8,
            text: 'く',
            phonetic: 'ku',
            examples: ['くうき - air', 'きく - hear'],
        },
        {
            id: 9,
            text: 'け',
            phonetic: 'ke',
            examples: ['こけ - moss', 'かきくけこ'],
        },
        {
            id: 10,
            text: 'こ',
            phonetic: 'ko',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 11,
            text: 'さ',
            phonetic: 'sa',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 12,
            text: 'し',
            phonetic: 'shi',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 13,
            text: 'す',
            phonetic: 'su',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 14,
            text: 'せ',
            phonetic: 'se',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 15,
            text: 'そ',
            phonetic: 'so',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 16,
            text: 'た',
            phonetic: 'ta',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 17,
            text: 'ち',
            phonetic: 'chi',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 18,
            text: 'つ',
            phonetic: 'tsu',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 19,
            text: 'て',
            phonetic: 'te',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 20,
            text: 'と',
            phonetic: 'to',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 21,
            text: 'な',
            phonetic: 'na',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 22,
            text: 'に',
            phonetic: 'ni',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 23,
            text: 'ぬ',
            phonetic: 'nu',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 24,
            text: 'ね',
            phonetic: 'ne',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 25,
            text: 'の',
            phonetic: 'no',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 26,
            text: 'は',
            phonetic: 'ha',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 27,
            text: 'ひ',
            phonetic: 'hi',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 28,
            text: 'ふ',
            phonetic: 'fu',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 29,
            text: 'へ',
            phonetic: 'he',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 30,
            text: 'ほ',
            phonetic: 'ho',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 31,
            text: 'ま',
            phonetic: 'ma',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 32,
            text: 'み',
            phonetic: 'mi',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 33,
            text: 'む',
            phonetic: 'mu',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 34,
            text: 'め',
            phonetic: 'me',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 35,
            text: 'も',
            phonetic: 'mo',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 36,
            text: 'ら',
            phonetic: 'ra',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 37,
            text: 'り',
            phonetic: 'ri',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 38,
            text: 'る',
            phonetic: 'ru',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 39,
            text: 'れ',
            phonetic: 're',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 40,
            text: 'ろ',
            phonetic: 'ro',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 41,
            text: 'や',
            phonetic: 'ya',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 42,
            text: 'ゆ',
            phonetic: 'yu',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 43,
            text: 'よ',
            phonetic: 'yo',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 44,
            text: 'わ',
            phonetic: 'wa',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 45,
            text: 'を',
            phonetic: 'wo',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 46,
            text: 'ん',
            phonetic: 'n',
            examples: ['あいうえお', 'かきくけこ'],
        },
    ];

    return (
        <div style={{ display: 'flex', maxWidth: '100vw', overflow: 'hidden' }}>
            <NavDrawer />
            <div style={{ flex: 1, overflowX: 'auto', margin: '0 1%' }}>
                <h2 className="title">Hiragana</h2>

                <ThemeProvider theme={darkTheme}>
                    <Card className='summary'>
                        <CardContent className='card-text'>Hiragana is the main writing style used in Japanese. Hiragana is primarily used for native Japanese words. Starting with Hiragana provides a foundation for learning the Japanese language.</CardContent>
                    </Card>

                    <Grid container spacing={1}>
                        {cards.map((card) => (
                            <Grid item xs={card.id <= 40 ? 2.4 : (card.id > 40 && card.id <= 43) ? 4 : (card.id >= 44 && card.id <= 45) ? 6 : (card.id >= 46) ? 12 : 12} key={card.id} onClick={() => handleOpenModal(card)}>
                                <Card className='char-card'>
                                    <CardContent className='card-text'>{card.text}</CardContent>
                                </Card>
                            </Grid>
                        ))}

                        {/* Modal */}
                        <Modal open={isModalOpen} onClose={handleCloseModal}>
                            <Box sx={style}>
                                <div>
                                    <h2 className='title'>{selectedCard?.text}</h2>
                                    <p>Phonetic: {selectedCard?.phonetic}</p>
                                    <p>Examples:</p>
                                    <ul>
                                        {selectedCard?.examples.map((example, index) => (
                                        <li key={index}>{example}</li>
                                        ))}
                                    </ul>
                                </div>
                            </Box>
                        </Modal>
                    </Grid>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default HiraganaLearn;