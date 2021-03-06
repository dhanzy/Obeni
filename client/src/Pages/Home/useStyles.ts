import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
    },
    section: {
        position: 'relative',
        '&:nth-child(odd)': {
            color: '#fff',
            backgroundColor: '#000',
        }
    },
    homeSection: {
        color: '#fff',
        height: '100vh',
        overflowY: 'hidden',
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'scale 1s ease, opacity .2s ease',
        },
    },
    mainDesc: {
        position: 'absolute',
        bottom: '40%',
        right: '5%',
        width: '30%',
        [theme.breakpoints.down('xs')]: {
            width: '45%',
            bottom: '20%',
        },
    },
    cardCollectionImage: {
        zIndex: 1,
        transition: 'all .5s ease',
        '&:hover': {
            transform: 'scale(1.1)',
            zIndex: 2,
        },
    },
}));

export default useStyles;