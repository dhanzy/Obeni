import { makeStyles } from  '@material-ui/core';

const useStyles = makeStyles(()=>({
    productGallery: {
        overflowY: 'hidden',
    },
    additionalImage: {
        flex: 1,
        marginRight: '20px',
        '& .MuiPaper-root': {
            marginBottom: '20px',
        }
    },
    selectedImage: {
        flex: 3,
    }
}));

export default useStyles;