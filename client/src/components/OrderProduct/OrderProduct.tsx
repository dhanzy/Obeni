import React from 'react'
import { Box, CardMedia } from '@material-ui/core';

import Currency from  '../Currency/Currency';
import useStyles from './useStyles';

interface OrderProductProps {
    image: string;
    title: string;
    quantity: number;
    price: number;
}

const OrderProduct:React.FC<OrderProductProps> = ({image, title, price, quantity}) => {
    const classes = useStyles();

    return (
        <Box className={classes.checkoutProductWrap}>
            <Box className={classes.checkoutProductThumb}>
                <CardMedia component="img" image={image} height="150px" />
            </Box>
            <Box title={classes.checkoutProductName}>
                {title}
                <Box component="strong"> x&nbsp;{quantity}</Box>
            </Box>
            <Box className={classes.checkoutProductTotal}>
                <Currency />{(price * quantity).toLocaleString()}
            </Box>
        </Box>
    )
}

export default OrderProduct;
