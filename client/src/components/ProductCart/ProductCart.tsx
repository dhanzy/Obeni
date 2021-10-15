import React from 'react';
import { TableRow, CardMedia, Box, TableCell, IconButton, Button, Typography, Input } from '@material-ui/core';
import { Add, Cancel, Remove } from '@material-ui/icons';

import useStyles from './useStyles';
import ProductCartProps from '../../Interface/ProductCart';
import Currency from '../../components/Currency/Currency';
import { useCartContext } from '../../context/cartContext';

interface Props {
    product: ProductCartProps;
}

const ProductCart:React.FC<Props> = ({product}): JSX.Element => {
    const classes = useStyles();
    const { increaseCartContext, decreaseCartContext, removeCartContext } = useCartContext();

    
    return (
        <TableRow>
            <TableCell>
                <Box>
                    <CardMedia component="img" image={product.image} className={classes.productImage} />
                </Box>
            </TableCell>
            <TableCell>{product.title}</TableCell>
            <TableCell>{product.selectedSize}</TableCell>
            <TableCell>
                <Box display="flex" alignContent="center">
                    <Button onClick={()=> decreaseCartContext(product)}><Remove /></Button>
                        <Input value={product.quantity} type="number" className={classes.cartQtyInput} />
                    <Button onClick={()=> increaseCartContext(product)}><Add /></Button>
                </Box>
            </TableCell>
            <TableCell>
                <Box>
                    <Typography><Box component="span"></Box><Currency />{(product.price * product.quantity).toLocaleString()}</Typography>
                </Box>
            </TableCell>
            <TableCell>
                <IconButton onClick={()=> removeCartContext(product)}>
                    <Cancel />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default ProductCart;
