import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    productPanel: {
        width: '100%',
    },
    productGallery: {
        overflowY: 'hidden',
    },
    additionalImage: {
        flex: 1,
        marginRight: '20px',
        '& div': {
            marginBottom: '20px',
            backgroundColor: '#313131',
            height: '100px',
            width: '100%',
            animation: `$skeleton 1s ${theme.transitions.easing.easeInOut} infinite alternate`,
        }
    },
    selectedImage: {
        flex: 3,
        '& .cardImg': {
            backgroundColor: '#313131',
            width: '100%',
            maxWidth: '500px',
            height: '100%',
            minHeight: '400px',
            animation: `$skeleton 1s ${theme.transitions.easing.easeInOut} infinite alternate`, 
        },
    },
    title: {
        backgroundColor: '#313131',
        width: '100%',
        height: '25px',
        marginBottom: '20px',
        borderRadius: '10px',
        animation: `$skeleton 1s ${theme.transitions.easing.easeInOut} infinite alternate`,
    },
    price: {
        backgroundColor: '#313131',
        width: '50%',
        height: '20px',
        borderRadius: '10px',
        animation: `$skeleton 1s ${theme.transitions.easing.easeInOut} infinite alternate`,
    },
    desc: {
        backgroundColor: '#313131',
        width: '100%',
        height: '150px',
        animation: `$skeleton 1s ${theme.transitions.easing.easeInOut} infinite alternate`,
    },
    "@keyframes skeleton": {
        to: {
            opacity: 0.5,
        }
    }
}))

export default useStyles;