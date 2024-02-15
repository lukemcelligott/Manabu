import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation } from 'react-router-dom';
import { MenuItem, Select, colors } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

import { useSelectedOption } from './AlphaContext';

import SchoolIcon from '@mui/icons-material/School';
import QuizIcon from '@mui/icons-material/Quiz';
import EditIcon from '@mui/icons-material/Edit';

import './Styles/NavDrawer.css';

function NavDrawer() {
    const { selectedOption, setSelectedOption } = useSelectedOption();

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
                    <hr></hr>
                    <ListItem>
                        <Select style={{ color: '#EEEEEE' }} className='alpha-select' labelId="demo-simple-select-label" id="demo-simple-select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} color="secondary">
                            <MenuItem value="hiragana">Hiragana</MenuItem>
                            <MenuItem value="katakana">Katakana</MenuItem>
                            <MenuItem value="kanji">Kanji</MenuItem>
                        </Select>
                    </ListItem>
                    <ListItem className='list-item'>
                        <SchoolIcon></SchoolIcon>
                        <ListItemText className='label'>Learn</ListItemText>
                    </ListItem>
                    <ListItem className='list-item'>
                        <QuizIcon></QuizIcon>
                        <ListItemText className='label'>Quiz</ListItemText>
                    </ListItem>
                    <ListItem className='list-item'>
                        <EditIcon></EditIcon>
                        <ListItemText className='label'>Practice</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default NavDrawer;
