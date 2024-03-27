import { Key, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Modal } from '@mui/material';
import Grid from '@mui/material/Grid';

import NavDrawer from "../NavDrawer";

import hiraganaData from '../../assets/hiraganaData.json';

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
    hiragana: string;
    pronunciation: string;
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

    const sortedHiraganaData = [...hiraganaData].sort((a, b) => a.id - b.id);

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
                        {sortedHiraganaData.map((card) => (
                            <Grid item xs={card.id <= 40 ? 2.4 : (card.id > 40 && card.id <= 43) ? 4 : (card.id >= 44 && card.id <= 45) ? 6 : (card.id >= 46) ? 12 : 12} key={card.id} onClick={() => handleOpenModal(card)}>
                                <Card raised className='char-card'>
                                    <CardContent className='card-text'>{card.hiragana}</CardContent>
                                </Card>
                            </Grid>
                        ))}

                        {/* Modal */}
                        <Modal open={isModalOpen} onClose={handleCloseModal}>
                            <Box sx={style}>
                                <div>
                                    <h2 className='title'>{selectedCard?.hiragana}</h2>
                                    <p>Phonetic: {selectedCard?.pronunciation}</p>
                                    <p>Examples:</p>
                                    <ul>
                                        {selectedCard?.examples.map((example: string, index: Key | null | undefined) => (
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