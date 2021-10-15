import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    img: {
        backgroundColor: '#313131',
        width: '100%',
        height: '300px',
        animation: `$skeleton 1s ${theme.transitions.easing.easeInOut} infinite alternate`,
    },
    title: {
        backgroundColor: '#313131',
        width: '100%',
        height: '25px',
        marginBottom: '20px',
        animation: `$skeleton 1s ${theme.transitions.easing.easeInOut} infinite alternate`,
    },
    price: {
        backgroundColor: '#313131',
        width: '50%',
        height: '20px',
        animation: `$skeleton 1s ${theme.transitions.easing.easeInOut} infinite alternate`,
    },
    "@keyframes skeleton": {
        to: {
            opacity: 0.5,
        }
    }
}))

export default useStyles;