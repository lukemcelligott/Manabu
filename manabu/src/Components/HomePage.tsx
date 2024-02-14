import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import '../App.css';
import './Styles/HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <Card sx={{ minWidth: 275 }} className="main card">
                <CardContent>
                    <h1 className='font'>
                        Manabu
                    </h1>
                    <p className='font'>
                        Manabu is a Japanese learning platform that allows you to practice learning hiragana, katakana, and kanji.
                    </p>
                    <Link to="/hiragana" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button variant="outlined" color="secondary" className='abc-select'>
                            Hiragana
                        </Button>    
                    </Link>
                    <br></br>
                    <Button variant="outlined" color="secondary" className='abc-select'>
                        Katana
                    </Button>
                    <br></br>
                    <Button variant="outlined" color="secondary" className='abc-select'>
                        Kanji
                    </Button>
                </CardContent>
            </Card>
        </>
    )
}

export default HomePage;