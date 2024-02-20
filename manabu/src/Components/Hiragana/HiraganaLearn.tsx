import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Modal, Paper } from '@mui/material';
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
    border: '2px solid #000',
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
            text: 'a あ',
            phonetic: 'ah',
            examples: ['あめ - rain', 'ありがとう - thank you'],
        },
        {
            id: 2,
            text: 'i い',
            phonetic: 'e',
            examples: ['はい - yes', 'いいえ - no'],
        },
        {
            id: 3,
            text: 'u う',
            phonetic: 'ooh',
            examples: ['うみ - sea', 'うま - horse'],
        },
        {
            id: 4,
            text: 'e え',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 5,
            text: 'o お',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 6,
            text: 'ka か',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 7,
            text: 'ki き',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 8,
            text: 'ku く',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 9,
            text: 'ke け',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 10,
            text: 'ko こ',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 11,
            text: 'sa さ',
            phonetic: 'sa',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 12,
            text: 'shi し',
            phonetic: 'sa',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 13,
            text: 'su す',
            phonetic: 'sa',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 14,
            text: 'se せ',
            phonetic: 'sa',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 15,
            text: 'so そ',
            phonetic: 'sa',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 16,
            text: 'ta た',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 17,
            text: 'chi ち',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 18,
            text: 'tsu つ',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 19,
            text: 'te て',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 20,
            text: 'to と',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 21,
            text: 'na な',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 22,
            text: 'ni に',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 23,
            text: 'nu ぬ',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 24,
            text: 'ne ね',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 25,
            text: 'no の',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 26,
            text: 'ha は',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 27,
            text: 'hi ひ',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 28,
            text: 'fu ふ',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 29,
            text: 'he へ',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 30,
            text: 'ho ほ',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 31,
            text: 'ma ま',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 32,
            text: 'mi み',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 33,
            text: 'mu む',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 34,
            text: 'me め',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 35,
            text: 'mo も',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 36,
            text: 'ra ら',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 37,
            text: 'ri り',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 38,
            text: 'ru る',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 39,
            text: 're れ',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 40,
            text: 'ro ろ',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 41,
            text: 'ya や',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 42,
            text: 'yu ゆ',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 43,
            text: 'yo よ',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 44,
            text: 'wa わ',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 45,
            text: 'wo を',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
        {
            id: 46,
            text: 'n ん',
            phonetic: 'e',
            examples: ['あいうえお', 'かきくけこ'],
        },
    ];

    return (
        <div style={{ display: 'flex', maxWidth: '100vw', overflow: 'hidden' }}>
            <NavDrawer />
            <div style={{ flex: 1, overflowX: 'auto', margin: '0 1%' }}>
                <h2 className="title">Hiragana</h2>

                <ThemeProvider theme={darkTheme}>
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
                                    <h2>{selectedCard?.text}</h2>
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