import React from 'react'
import { Box, Grid, Typography, CardMedia } from '@material-ui/core';
import useStyles from './useStyles';
import ProductCard from '../../components/ProductCard/ProductCard'

const Collection = ():JSX.Element => {
    const classes = useStyles();

    return (
        <Box>
            <Box className={classes.top}>
                <CardMedia 
                    component="img" 
                    image="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <Box className={classes.desc}>
                    <Typography variant="h3">2020/2021 Collection</Typography>
                    <Typography component="p">Checkout our collection</Typography>
                </Box>
            </Box>
            <Box>
                <Grid container spacing={1}>
                    <Grid item md={2} sm={2}>
                        <Box p={2} className={classes.sidePanel}>
                            <Typography component="p">All</Typography>
                            <Typography component="p">New Arrivals</Typography>
                            <Typography component="p">Brand</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={10} sm={10}>
                        <Grid container spacing={2}>
                            <Grid item md={4} sm={6}>
                                <ProductCard />
                            </Grid>
                            <Grid item md={4} sm={6}>
                                <ProductCard />
                            </Grid>
                            <Grid item md={4} sm={6}>
                                <ProductCard />
                            </Grid>
                            <Grid item md={4} sm={6}>
                                <ProductCard />
                            </Grid>
                            <Grid item md={4} sm={6}>
                                <ProductCard />
                            </Grid>
                            <Grid item md={4} sm={6}>
                                <ProductCard />
                            </Grid>
                            <Grid item md={4} sm={6}>
                                <ProductCard />
                            </Grid>
                            <Grid item md={4} sm={6}>
                                <ProductCard />
                            </Grid>
                            <Grid item md={4} sm={6}>
                                <ProductCard />
                            </Grid>
                            <Grid item md={4} sm={6}>
                                <ProductCard />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Collection;
