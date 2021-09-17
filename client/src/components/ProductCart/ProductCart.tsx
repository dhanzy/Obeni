import React from 'react';
import { TableRow, CardMedia, Box, TableCell, IconButton, Button, Typography, Input } from '@material-ui/core';
import { Add, Cancel, Remove } from '@material-ui/icons';

import useStyles from './useStyles';
import ProductCartProps from '../../Interface/ProductCart';
import Currency from '../../components/Currency/Currency';


const ProductCart:React.FC<ProductCartProps> = (props): JSX.Element => {
    const classes = useStyles();
    
    return (
        <TableRow>
            <TableCell>
                <Box>
                    <CardMedia component="img" image={props.productImage} className={classes.productImage} />
                </Box>
            </TableCell>
            <TableCell>{props.productName}</TableCell>
            <TableCell>{props.productSize}</TableCell>
            <TableCell>
                <Box display="flex" alignContent="center">
                    <Button><Remove /></Button>
                        <Input value="2" type="number" className={classes.cartQtyInput} />
                    <Button><Add /></Button>
                </Box>
            </TableCell>
            <TableCell>
                <Box>
                    <Typography><Box component="span"></Box><Currency />{(props.productPrice).toLocaleString()}</Typography>
                </Box>
            </TableCell>
            <TableCell>
                <IconButton>
                    <Cancel />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default ProductCart;
