import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
        paper: '#393e46',
    }
  },
});

import NavDrawer from "../NavDrawer";

import '../Styles/HiraganaLearn.css';
import { Paper } from '@mui/material';
import { TableRows } from '@mui/icons-material';

function HiraganaLearn() {

    return (
        <div style={{ display: 'flex', maxWidth: '100vw', overflow: 'hidden' }}>
            <NavDrawer />
            <div style={{ flex: 1, overflowX: 'auto', margin: '0 1%' }}>
                <h2 className="title">Hiragana</h2>
                {/* Table of Hiragana characters */}
                <ThemeProvider theme={darkTheme}>
                <TableContainer component={Paper} className='hiragana-table'>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align='center' colSpan={5}>Character Sheet</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="center">a あ</TableCell>
                                <TableCell align="center">i い</TableCell>
                                <TableCell align="center">u う</TableCell>
                                <TableCell align="center">e え</TableCell>
                                <TableCell align="center">o お</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">ka か</TableCell>
                                <TableCell align="center">ki き</TableCell>
                                <TableCell align="center">ku く</TableCell>
                                <TableCell align="center">ke け</TableCell>
                                <TableCell align="center">ko こ</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">sa さ</TableCell>
                                <TableCell align="center">shi し</TableCell>
                                <TableCell align="center">su す</TableCell>
                                <TableCell align="center">se せ</TableCell>
                                <TableCell align="center">so そ</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">ta た</TableCell>
                                <TableCell align="center">chi ち</TableCell>
                                <TableCell align="center">tsu つ</TableCell>
                                <TableCell align="center">te て</TableCell>
                                <TableCell align="center">to と</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">na な</TableCell>
                                <TableCell align="center">ni に</TableCell>
                                <TableCell align="center">nu ぬ</TableCell>
                                <TableCell align="center">ne ね</TableCell>
                                <TableCell align="center">no の</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">ha は</TableCell>
                                <TableCell align="center">hi ひ</TableCell>
                                <TableCell align="center">fu ふ</TableCell>
                                <TableCell align="center">he へ</TableCell>
                                <TableCell align="center">ho ほ</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">ma ま</TableCell>
                                <TableCell align="center">mi み</TableCell>
                                <TableCell align="center">mu む</TableCell>
                                <TableCell align="center">me め</TableCell>
                                <TableCell align="center">mo も</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">ya や</TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center">yu ゆ</TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center">yo よ</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">ra ら</TableCell>
                                <TableCell align="center">ri り</TableCell>
                                <TableCell align="center">ru る</TableCell>
                                <TableCell align="center">re れ</TableCell>
                                <TableCell align="center">ro ろ</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">wa わ</TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center">wo を</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">n ん</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default HiraganaLearn;