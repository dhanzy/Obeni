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
        
    },
}))

export default useStyles;
