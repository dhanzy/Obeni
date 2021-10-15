import { makeStyles } from  '@material-ui/core';

const useStyles = makeStyles(()=>({
    productPanel: {
        width: '100%',
    },
    productGallery: {
        overflowY: 'hidden',
    },
    additionalImage: {
        flex: 1,
        marginRight: '20px',
        '& .MuiPaper-root': {
            margin: '0px 5px',
            minWidth: '83px',
        }
    },
    selectedImage: {
        flex: 3,
    }
}));

export default useStyles;