import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=> ({
    textFull: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '',
        },
    },
    textField: {
        width: 'calc(50% - 24px)',
    },
    marginLeft: {
        marginLeft: theme.spacing(3),
    },
    marginRight: {
        marginRight: theme.spacing(3),
    },
    padding: {
        marginLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
    margin: {
        marginTop: theme.spacing(3),
    }
}));

export default useStyles;