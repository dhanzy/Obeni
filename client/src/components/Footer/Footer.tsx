import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid } from '@material-ui/core';

import useStyles from './useStyles';

const Footer = () => {
    const classes = useStyles();
    const year = new Date().getFullYear()
    return (
        <Box p={5} className={classes.root}>
            <Grid container>
                <Grid item lg={3}>
                    <Box>
                        <Typography variant="h4">Information</Typography>
                    </Box>
                </Grid>
                <Grid item lg={3}>
                    <Box></Box>
                </Grid>
                <Grid item lg={3}>
                    <Box>
                        <Typography variant="h4">Get Contact</Typography>
                        <Typography component="p">Ogbeni apparels is a premium ecommerce site with available nice attires</Typography>
                        <Link to="#">
                            <Typography component="p">Telephone: +234 123456789</Typography>
                        </Link>
                        <Link to="#">
                            <Typography component="p">Email: +234 123456789</Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item lg={3}>
                    <Box>Get Social</Box>
                </Grid>
            </Grid>
            <Box mt={10} display="flex" justifyContent="space-between" alignItems="center">
                <Typography component="p">Copyright {year}. All right reserved</Typography>
                <Typography component="p">Ogbeni Apparels</Typography>
            </Box>
        </Box>
    )
}

export default Footer
