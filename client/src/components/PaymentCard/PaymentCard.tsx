import React from 'react';
import { Box, Typography, CardMedia, Paper, Radio, TableContainer, Table, TableBody, TableFooter, TableRow, TableCell, Button } from '@material-ui/core';

import useStyles from './useStyles';
import Currency from '../Currency/Currency';
import PaystackImage from '../../Images/paystack-wc.png';
import OrderProduct from '../OrderProduct/OrderProduct';
import { useCartContext } from '../../context/cartContext';
import { config } from '../../config/config';

const PaymentCard = () => {
    const classes = useStyles();

    const { cart, total } = useCartContext();

    return (
        <Box>
            <Typography variant="h3">Your Order</Typography>
            <Box mt={2}>
                <TableContainer>
                    <Table>
                        <TableBody>
                            {cart.map((data, index) => (
                                <TableRow key={`${data.title}-${index}`}>
                                    <TableCell colSpan={2}>
                                        <OrderProduct title={data.title} price={data.price} image={data.image} quantity={data.quantity} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter className={classes.tableFooter}>
                            <TableRow>
                                <TableCell component="th">Subtotal</TableCell>
                                <TableCell align="right"><Currency />{(total).toLocaleString()}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">Shipping <br/>Flat Rate</TableCell>
                                <TableCell align="right"><Currency />{(config.shipping).toLocaleString()}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">Total</TableCell>
                                <TableCell align="right"><Currency />{(total + config.shipping).toLocaleString()}</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Box>

            <Box mt={5}>
                <Paper>
                    <Box>
                        <Box className={classes.payment_method}>
                            <Radio className="payment_method_paystack" value="paystack" />
                            <label htmlFor="payment_method_paystack">
                                Debit/Credit Cards
                                <CardMedia component="img" image={PaystackImage} alt="Paystack Payment Options" />
                            </label>
                            
                            <Box>
                                <Typography component="p">Make payment using your debit and credit cards</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
            <Box mt={5}>
                <Typography component="p">
                    Your personal data will be used to process your order, support your experience throughout this website, 
                    and for other purposes described in our privacy policy
                </Typography>
            </Box>
            <Box mt={3}>
                <Button 
                    fullWidth 
                    variant="contained" 
                    color="secondary" 
                    type="submit"       
                    >
                        Place Order
                </Button>
            </Box>
        </Box>
    )
}

export default PaymentCard;
