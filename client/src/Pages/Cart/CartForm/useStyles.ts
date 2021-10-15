import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    tableContainer: {
        overflowX: 'scroll',
    },
    productImage: {
        borderRadius: '50%',
        width: '100px',
        height: '100px',
    },
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
    shippingModeTitle: {
        marginBottom: '30px',
    },
    checkoutTable: {
        marginBottom: '10px',
        minWidth: '500px',
    },
    checkoutBtn: {
        width: '100%',
    },
    btnContinueShopping: {
        [theme.breakpoints.down('xs')]:{
            marginBottom: '10px',
        },
    },
    btnCartUpdate: {
        marginLeft: '20px',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '0px',
        },
    },
}))

export default useStyles;
