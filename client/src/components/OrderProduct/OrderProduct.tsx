import React from 'react'
import { Box, CardMedia } from '@material-ui/core';

import Currency from  '../Currency/Currency';
import useStyles from './useStyles';

interface OrderProductProps {
    productImage: string;
    productName: string;
    productQuantity?: number;
    productPrice: number;
}

const OrderProduct:React.FC<OrderProductProps> = ({productImage, productName, productPrice}) => {
    const classes = useStyles();

    return (
        <Box className={classes.checkoutProductWrap}>
            <Box className={classes.checkoutProductThumb}>
                <CardMedia component="img" image={productImage} height="150px" />
            </Box>
            <Box className={classes.checkoutProductName}>
                {productName}
                <Box component="strong"> x&nbsp;2</Box>
            </Box>
            <Box className={classes.checkoutProductTotal}>
                <Currency />{(productPrice).toLocaleString()}
            </Box>
        </Box>
    )
}

export default OrderProduct;
