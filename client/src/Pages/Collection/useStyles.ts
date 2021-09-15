import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    top: {
        position: 'relative',
        height: '100vh',
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectCenter: 'center',
        },
    },
    desc: {
        position: 'absolute',
        left: '10%',
        bottom: '50%',
    },
    sidePanel: {
        position: 'sticky',
        top: 20,
    },
}))

export default useStyles;