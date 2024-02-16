import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import NavDrawer from '../NavDrawer';

function HiraganaQuiz() {

    return (
        <div style={{ display: 'flex', maxWidth: '100vw', overflow: 'hidden' }}>
            <NavDrawer />
            <div style={{ flex: 1, overflowX: 'auto', margin: '0 1%' }}>
                <h2 className="title">Hiragana</h2>
                <Card sx={{ minWidth: 275 }} className="main card">
                    <CardContent>
                        <h1 className='font'>Quiz</h1>

                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default HiraganaQuiz;