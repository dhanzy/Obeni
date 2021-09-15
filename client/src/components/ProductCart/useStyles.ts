import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles( (theme) => ({
    productImage: {
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        [theme.breakpoints.down('sm')]: {
            width: '80px',
            height: '80px',
        },
    },
    cartQtyInput: {
        border: '1px solid #efefef',
        width: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& input': {
            textAlign: 'center',
        }
    },
}))

export default useStyles;
