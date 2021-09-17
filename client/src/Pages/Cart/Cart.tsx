import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { Box, Button, Typography, useMediaQuery, Table, TableHead, TableRow, TableBody, TableCell, Card, CardContent, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';


import useStyles from './useStyles';
import { CartData } from '../../Dummydata/Data';
import ProductCart from '../../components/ProductCart/ProductCart';
import Currency from '../../components/Currency/Currency';
import { config } from '../../config/config';


const Cart = ():JSX.Element => {
    const classes = useStyles();
    const theme = useTheme();
    const [free, setFree] = React.useState<boolean>(true)
    const small = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setFree((prev)=> !prev)
    }

    return (
        <Box py={10} px={!small ? 10: 2}>
            <Box>
                <Box>
                    <Typography variant="h2">Shopping Cart</Typography>
                </Box>
                <Box py={5}>
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
                            {CartData.map((cart) => (
                                <ProductCart key={cart.productName} productImage={cart.productImage} productName={cart.productName} productSize={cart.productSize} productPrice={cart.productPrice} />
                            ))}
                        </TableBody>
                    </Table>
                    <Box p={2}>
                        <Box mt={2}>
                            <Button variant="outlined" color="secondary" component={Link} to='/collection'>Continue Shopping</Button>
                            <Button variant="outlined" color="secondary" style={{marginLeft: '20px'}}>Update Cart</Button>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Card>
                        <CardContent>
                            <form method="post">
                                <Box display="flex" justifyContent="space-between" flexDirection={small ? 'column' : 'row'} >
                                    <Box>
                                        <Typography variant="h4" className={classes.shippingModeTitle}>Choose Shipping Mode:</Typography>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox checked={free} onChange={handleChange} />}  label="Store Pickup Free" />
                                            <FormControlLabel control={<Checkbox checked={!free} onChange={handleChange} />}  label="Delivery at home (under 2-4 days) - 5,000" />
                                        </FormGroup>
                                    </Box>
                                    <Box>
                                        <Table className={classes.checkoutTable}>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>Subtotal</TableCell>
                                                    <TableCell><Currency />25,000</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Shipping</TableCell>
                                                    <TableCell>{free ? 'Free' : (
                                                        <>
                                                            <Currency /> {(config.shipping).toLocaleString()}
                                                        </>
                                                        )} </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Total</TableCell>
                                                    <TableCell><Currency />{free ? '25,000' : (25000 + config.shipping).toLocaleString() }</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                        {/* <Button variant="contained" type="submit" color="secondary" className={classes.checkoutBtn}>Checkout</Button> */}
                                        <Button variant="contained" color="secondary" className={classes.checkoutBtn} component={Link} to='/checkout'>Checkout</Button>
                                    </Box>
                                </Box>
                            </form>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Box>
    )
}

export default Cart;
