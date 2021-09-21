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
            aspectRatio: 'auto 350 / 350',
            height: 'auto',
        },
    },
    checkoutProductName: {
        display: 'table-cell',
        verticalAlign: 'top',
        paddingRight: '21px',
        paddingLeft: '14px',
    },
    checkoutProductTotal: {
        display: 'table-cell',
        verticalAlign: 'top',
        textAlign: 'right',
    },
}))

export default useStyles;
