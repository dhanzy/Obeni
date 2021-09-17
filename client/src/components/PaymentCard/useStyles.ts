import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    checkoutProductWrap: {
        display: 'table',
        width: '100%',
    },
    checkoutProductThumb: {
        width: '55px',
        display: 'table-cell',
        verticalAlign: 'top',
        '& img': {
            width: '100%',
            verticalAlign: 'bottom',
            aspectRatio: 'auto 350 / 350'
        },
    },
    checkoutProductName: {
        display: 'table-cell',
        vertiaclAlign: 'top',
    },
    checkoutProductTotal: {
        display: 'table-cell',
        vertiaclAlign: 'top',
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
    cartQtyInput: {
        border: '1px solid #efefef',
        width: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tableFooter: {
        '& tr': {
            backgroundColor: '#fafafa',
        },
    },
    payment_method: {
        padding: '20px 10px',
        '& img': {
            display: 'inline-block',
            maxHeight: '42px',
            marginLeft: '8px',
            width: 'auto',
            verticalAlign: 'middle'
        },
    },
}))

export default useStyles;
