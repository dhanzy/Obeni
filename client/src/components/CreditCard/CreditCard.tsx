import React from 'react'
import { Box, TextField, Button } from '@material-ui/core';

import useStyles from './useStyles';

const CreditCard = (): JSX.Element => {
    const classes = useStyles();
    return (
        <Box>
            <form>
                <TextField 
                    label="Name On Card"
                    variant="standard"
                    type="text"
                    className={classes.textField}
                />
                <TextField
                    label="Card Number"
                    variant="standard"
                    className={classes.textField}
                />
                <Button type="submit" color="secondary" variant="contained" className={classes.submit}>Check Out</Button>
            </form>
        </Box>
    )
}

export default CreditCard
