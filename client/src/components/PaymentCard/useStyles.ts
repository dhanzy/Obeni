import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
