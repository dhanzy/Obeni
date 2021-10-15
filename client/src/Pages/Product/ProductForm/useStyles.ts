import { makeStyles } from  '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    sizeContainer: {
        width: '100%',
        '& .MuiRadio-root': {
            display: 'none',
        },
        '& .MuiFormControlLabel-root': {
            margin: '0px 5px',
            fontSize: '0.875rem',
            minwidth: '64px',
            transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            fontWeight: 500,
            lineHeight: 1.75,
            borderRadius: '4px',
            textTransform: 'uppercase',
            border: '1px solid rgba(0, 0, 0, 0.5)',
            padding: '5px 15px',
            '&.active': {
                backgroundColor: '#D1B000',
            },
        },
        [theme.breakpoints.down('xs')]: {
            '& .MuiButton-root':{
                minWidth: '40px',
            }
        },
    },
  
}));

export default useStyles;