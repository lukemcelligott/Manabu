import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

import { useSelectedOption } from './AlphaContext';

import '../index.css';
import '../App.css';
import './Styles/HomePage.css';

const theme = createTheme({
    palette: {
      primary: {
        main: '#f96d00',
      },
    },
  });

function HomePage() {
    const { setSelectedOption } = useSelectedOption();

    return (
        <>
            <Card sx={{ minWidth: 275 }} className="main card">
                <CardContent>
                    <h1 className='font'>
                        Manabu
                    </h1>
                    <p className='font'>
                        Manabu (<span className='japanese'>まなぶ</span>) is a Japanese learning platform that allows you to practice learning hiragana, katakana, and kanji.
                    </p>
                    <ThemeProvider theme={theme}>
                        <Link to="/hiragana/learn" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Button variant="outlined" color="primary" className='abc-select' onClick={() => setSelectedOption('hiragana')}>
                                Hiragana
                            </Button>    
                        </Link>
                        <br></br>
                        <Link to="/katakana/learn" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Button variant="outlined" color="primary" className='abc-select' onClick={() => setSelectedOption('katakana')}>
                                Katakana
                            </Button>
                        </Link>
                        <br></br>
                        <Button variant="outlined" color="primary" className='abc-select' onClick={() => setSelectedOption('kanji')}>
                            Kanji
                        </Button>
                    </ThemeProvider>
                </CardContent>
            </Card>
        </>
    )
}

export default HomePage;