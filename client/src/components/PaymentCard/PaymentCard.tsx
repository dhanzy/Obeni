import React from 'react';
import { Box, Typography, CardMedia, Paper, Radio, TableContainer, Table, TableBody, TableFooter, TableRow, TableCell, Button } from '@material-ui/core';
import { usePaystackPayment } from 'react-paystack';

import useStyles from './useStyles';
import Currency from '../Currency/Currency';
import PaystackImage from '../../Images/paystack-wc.png';
import OrderProduct from '../OrderProduct/OrderProduct';
import { CartData } from '../../Dummydata/Data';

const PaymentCard = () => {
    const classes = useStyles();
    const publicKey = 'pk_test_a85d195cbad70934549a9d40387c1d1e03a07672'
    const name = "Testing"
    const phone = "08012345678"
    const amount = 10000 * 100
    const config = {
        email:'test@gmail.com',
        amount,
        publicKey,
        name,
        phone,
        text:'pay now', 
    }
    const onSuccess = () => { 
        alert("Thanks for doing buisness with us!")
    };
    const onClose = ()=> {
        alert('Wait! you need this product, Don\'t go')
    };
    const initializePayment = usePaystackPayment(config)
    return (
        <Box>
            <Typography variant="h3">Your Order</Typography>
            <Box mt={2}>
                <TableContainer>
                    <Table>
                        <TableBody>
                            {CartData.map((cart) => (
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <OrderProduct productName={cart.productName} productPrice={cart.productPrice} productImage={cart.productImage} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter className={classes.tableFooter}>
                            <TableRow>
                                <TableCell component="th">Subtotal</TableCell>
                                <TableCell align="right"><Currency />{(35000).toLocaleString()}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">Shipping <br/>Flat Rate</TableCell>
                                <TableCell align="right"><Currency />{(3000).toLocaleString()}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th">Total</TableCell>
                                <TableCell align="right"><Currency />{(60500).toLocaleString()}</TableCell>
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
                    onClick={()=> {
                        initializePayment(onSuccess, onClose)
                    }}
                    >
                        Place Order
                </Button>
            </Box>
        </Box>
    )
}

export default PaymentCard;
