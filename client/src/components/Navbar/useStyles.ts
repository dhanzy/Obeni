import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: 'transparent',
    },
    toolbar: {
        justifyContent: "space-between",
        '& a': {
            color: '#fff',
        },
    },
    navlink: {
        '& a': {
            transition: 'color .8s ease',
            '&.active': {
                color: theme.palette.secondary.main,
            },
            '&:hover': {
                color: theme.palette.secondary.light,
            },
        },
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            position: 'fixed',
            backgroundColor: '#fff',
            right: 0,
            transition: 'all .5s ease',
            overflow: 'hidden',
            paddingDown: 0,
            '& a, & button': {
                borderBottom: '1px solid #efefef',
                borderRadius: 0,
                color: '#000',
                paddingTop: '20px',
                paddingBottom: '20px',
            },
        },
    },
}))

export default useStyles;
