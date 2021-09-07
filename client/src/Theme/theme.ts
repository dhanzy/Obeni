import { createTheme } from '@material-ui/core';

export const theme = createTheme({
    typography: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),       
        fontSize: 14,
        h1: {
            fontSize: 50,
            fontWeight: 900,
        },
        h2: {
            fontSize: 40,
            fontWeight: 800,
        },
        h3: {
            fontSize: 30,
            fontWeight: 700,
        },
        h4: {
            fontSize: 25,
            fontWeight: 600,
        },
        h5: {
            fontSize: 20,
            fontWeight: 500,
        }
    },
    palette: {
        primary: {
            main: '#000000',
            light: '#efefef',
        },
        secondary: {
            main: '#D1B000',
            dark: '#756300',
            light: '#FFD700',
        },
    },
})
