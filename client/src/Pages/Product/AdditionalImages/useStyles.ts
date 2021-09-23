import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '&:hover':{
            cursor: 'pointer',
        },
    },
}));


export default useStyles;