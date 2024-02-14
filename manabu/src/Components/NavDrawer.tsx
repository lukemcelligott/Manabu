import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { MenuItem, Select, colors } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

import SchoolIcon from '@mui/icons-material/School';
import QuizIcon from '@mui/icons-material/Quiz';
import EditIcon from '@mui/icons-material/Edit';

import './Styles/NavDrawer.css';

function NavDrawer() {

    const [alpha, setAlpha] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAlpha(event.target.value as string);
    };

    return (
        <>
            <Drawer
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                        backgroundColor: '#393e46',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <List>
                    <ListItemText className='list-item drawer-title'>
                        <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h3>Manabu</h3>
                        </Link>
                    </ListItemText>
                    <ListItem>
                        <Select style={{ color: '#EEEEEE' }} className='alpha-select' labelId="demo-simple-select-label" id="demo-simple-select" value={alpha} onChange={handleChange} color="secondary">
                            <MenuItem value={10}>Hiragana</MenuItem>
                            <MenuItem value={20}>Katakana</MenuItem>
                            <MenuItem value={30}>Kanji</MenuItem>
                        </Select>
                    </ListItem>
                    <ListItem className='list-item'>
                        <SchoolIcon></SchoolIcon>
                        <ListItemText>Learn</ListItemText>
                    </ListItem>
                    <ListItem className='list-item'>
                        <QuizIcon></QuizIcon>
                        <ListItemText>Quiz</ListItemText>
                    </ListItem>
                    <ListItem className='list-item'>
                        <EditIcon></EditIcon>
                        <ListItemText>Practice</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default NavDrawer;
