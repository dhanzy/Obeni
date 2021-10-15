import React from 'react';
import { Table, TableCell, TableHead, Box, TableBody, TableRow, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './useStyles';
import { useCartContext } from '../../../context/cartContext';
import ProductCart from '../../../components/ProductCart/ProductCart';

const CartForm = () => {
    const classes = useStyles();
    const { cart } = useCartContext();

    return (
        <>
            <Box className={classes.tableContainer}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell>Size</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Total Price</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map((product, index) => (
                            <ProductCart key={`${product.title}-${product.selectedSize}`} product={product} />
                            ))}
                    </TableBody>
                </Table>
            </Box>
            <Box p={2}>
                <Box mt={2}>
                    <Button variant="outlined" color="secondary" component={Link} to='/collection' className={classes.btnContinueShopping}>Continue Shopping</Button>
                    <Button variant="outlined" color="secondary" className={classes.btnCartUpdate}>Update Cart</Button>
                </Box>
            </Box>
        </>
        )
}

export default CartForm
