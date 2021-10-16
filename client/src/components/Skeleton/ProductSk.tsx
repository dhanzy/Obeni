import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core';

import useStyles from './productStyles';

const ProductSk = () => {
    const classes = useStyles();


    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item md={6} className={classes.productPanel}>
                    <Box className={classes.productGallery}>
                        <Box className={classes.selectedImage}>
                            <Box height="700" className="cardImg"></Box>
                        </Box>
                        <Box className={classes.additionalImage}>
                            <Box></Box>
                            <Box></Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Box>
                        <Box className={classes.title}></Box>
                        <Box className={classes.price}></Box>
                        <Box mt={2} className={classes.desc}></Box>
                    </Box>
                </Grid>
            </Grid>

            <Box py={5}>
                    <Box>
                        <Typography variant="h3">Description</Typography>
                    </Box>
                    <Box mt={2}>
                        <Box className={classes.title}></Box>
                        <Box className={classes.title}></Box>
                        <Box className={classes.title}></Box>
                        <Box className={classes.title}></Box>
                        <Box className={classes.title}></Box>
                        <Box className={classes.price}></Box>
                    </Box>
                </Box>
        </Box>
    )
}

export default ProductSk;
