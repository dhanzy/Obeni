import React from 'react'
import { Box, TextField, Button } from '@material-ui/core';

import useStyles from './useStyles';

const PayPal = (): JSX.Element => {
    const classes = useStyles();
    return (
        <Box>
            <form>
                <TextField 
                    label="Name On PayPal"
                    variant="standard"
                    type="text"
                    className={classes.textField}
                />
                <TextField
                    label="PayPal"
                    variant="standard"
                    className={classes.textField}
                />
                <Button type="submit" color="secondary" className={classes.submit}>Pay with paypal</Button>
            </form>
        </Box>
    )
}

export default PayPal;
