import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paymentInfo: {
        position: 'sticky',
        top: '20px',
        borderRadius: '20px',
        backgroundColor: '#000',
        color: '#fff',
        '& input': {
            color: '#fff',
        },
    },
    cartQtyInput: {
        border: '1px solid #efefef',
        width: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}))

export default useStyles;
