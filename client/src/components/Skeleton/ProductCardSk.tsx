import React from 'react';
import { Box, Card, Typography, CardActionArea, CardContent, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './productCardStyles';


const ProductCardSk = (): JSX.Element => {
    const theme = useTheme();
    const xsmall = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Card>
                <CardActionArea>
                    <Box height={!xsmall ? "400" : '200'} className={classes.img} ></Box>
                    <CardContent>
                        <Box>
                            <Typography variant="h5" className={classes.title}></Typography>
                            <Typography variant="h5" className={classes.price}></Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )
}

export default ProductCardSk;
