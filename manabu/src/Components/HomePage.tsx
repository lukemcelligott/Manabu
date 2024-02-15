import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import { useSelectedOption } from './AlphaContext';

import '../index.css';
import '../App.css';
import './Styles/HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
    const { selectedOption, setSelectedOption } = useSelectedOption();

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
                    <Link to="/hiragana/learn" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button variant="outlined" color="secondary" className='abc-select' onClick={() => setSelectedOption('hiragana')}>
                            Hiragana
                        </Button>    
                    </Link>
                    <br></br>
                    <Button variant="outlined" color="secondary" className='abc-select' onClick={() => setSelectedOption('katakana')}>
                        Katana
                    </Button>
                    <br></br>
                    <Button variant="outlined" color="secondary" className='abc-select' onClick={() => setSelectedOption('kanji')}>
                        Kanji
                    </Button>
                </CardContent>
            </Card>
        </>
    )
}

export default HomePage;