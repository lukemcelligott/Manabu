import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

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
                        <Select className='alpha-select' labelId="demo-simple-select-label" id="demo-simple-select" value={alpha} onChange={handleChange}>
                            <MenuItem value={10}>Hiragana</MenuItem>
                            <MenuItem value={20}>Katakana</MenuItem>
                            <MenuItem value={30}>Kanji</MenuItem>
                        </Select>
                    </ListItem>
                    {['Learn', 'Quiz', 'Button 3'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText className='list-item' primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    )
}

export default NavDrawer;
