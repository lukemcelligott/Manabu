import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation } from 'react-router-dom';
import { MenuItem, Select, createTheme } from '@mui/material';

import SchoolIcon from '@mui/icons-material/School';
import QuizIcon from '@mui/icons-material/Quiz';
import EditIcon from '@mui/icons-material/Edit';

import { useNavigate } from 'react-router-dom';

import { useSelectedOption } from './AlphaContext';

import './Styles/NavDrawer.css';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
    palette: {
      primary: {
        main: '#f96d00',
      },
    },
  });

function NavDrawer() {
    const { selectedOption, setSelectedOption } = useSelectedOption();

    const navigate = useNavigate();

    const handleChange = (event: { target: { value: any; }; }) => {
        const selectedOption = event.target.value;
        setSelectedOption(selectedOption);
        // Redirect user to the corresponding page based on the selected option
        navigate(`/${selectedOption}/learn`);
    };

    // check for active path
    const location = useLocation();
    const isActive = (pathname: string) => location.pathname.includes(pathname);

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
                        <ThemeProvider theme={theme}>
                            <Select style={{ color: '#EEEEEE', }} className='alpha-select' labelId="demo-simple-select-label" id="demo-simple-select" value={selectedOption} onChange={handleChange} color="primary">
                                <MenuItem value="hiragana">Hiragana</MenuItem>
                                <MenuItem value="katakana">Katakana</MenuItem>
                                <MenuItem value="kanji">Kanji</MenuItem>
                            </Select>
                        </ThemeProvider>
                    </ListItem>
                    <ListItem className={`list-item ${isActive('/learn') ? 'active' : ''}`}>
                        <SchoolIcon></SchoolIcon>
                        <ListItemText className='label'>Learn</ListItemText>
                    </ListItem>
                    <ListItem className={`list-item ${isActive('/quiz') ? 'active' : ''}`}>
                        <QuizIcon></QuizIcon>
                        <ListItemText className='label'>Quiz</ListItemText>
                    </ListItem>
                    <ListItem className={`list-item ${isActive('/practice') ? 'active' : ''}`}>
                        <EditIcon></EditIcon>
                        <ListItemText className='label'>Practice</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default NavDrawer;
