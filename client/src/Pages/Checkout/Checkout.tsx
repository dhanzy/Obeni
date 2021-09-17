import React from 'react'
import { Box, Grid, FormControl, Input, InputLabel } from '@material-ui/core';


import PaymentCard from '../../components/PaymentCard/PaymentCard';

import useStyles from './useStyles';

const Checkout = ():JSX.Element => {
    document.title = 'Ogbeni Apparels - Checkout Page'
    const classes = useStyles();

    return (
        <Box py={10} px={8}>
            <Grid container spacing={5}>
                <Grid item md={8}>
                    <form method="post">
                        <Box>
                            <FormControl className={[classes.margin, classes.textField, classes.marginRight].join(' ')}>
                                <InputLabel htmlFor="billing_first_name" >First Name</InputLabel>
                                <Input id="billing_first_name" type="text" />
                            </FormControl>
                            <FormControl className={[classes.margin, classes.textField, classes.marginLeft].join(' ')}>
                                <InputLabel htmlFor="billing_last_name">Last Name</InputLabel>
                                <Input id="billing_last_name" type="text" />
                            </FormControl>
                            <Box>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="billing-address">Street Address</InputLabel>
                                    <Input id="billing-address" type="text" />
                                </FormControl>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="billing-town">Town/City</InputLabel>
                                    <Input id="billing-town" type="text" />
                                </FormControl>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="billing-state">State/Country</InputLabel>
                                    <Input id="billing-state" type="text" />
                                </FormControl>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="billing-phone">Phone</InputLabel>
                                    <Input id="billing-phone" type="phone" />
                                </FormControl>
                                <FormControl fullWidth className={classes.margin}>
                                    <InputLabel htmlFor="billing-email-address">Email Address</InputLabel>
                                    <Input id="billing-email-address" type="email" />
                                </FormControl>
                            </Box>
                        </Box>
                    </form>
                </Grid>
                <Grid item md={4}>
                    <PaymentCard />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Checkout;
