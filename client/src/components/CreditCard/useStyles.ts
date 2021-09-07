import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    textField: {
        color: '#fff',
        width: '100%',
        marginBottom: '30px',
        '& .MuiFormLabel-root': {
            color: '#fff',
        },
        '& .MuiInput-underline:before': {
            borderBottom: '1px solid rgba(255, 255, 255, 0.42)',
        },
        '& .MuiInput-underline:after': {
            borderBottom: '2px solid #fff',
        },
    },
    submit: {
      width: '100%',
      borderRadius: '20px',
      paddingTop: '10px',
      paddingBottom: '10px',
      backgroundColor: '',
    },
}));

export default useStyles;