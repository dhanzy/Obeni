import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { Box, Button, Typography, useMediaQuery, Table, TableRow, TableBody, TableCell, Card, CardContent, FormGroup, FormControlLabel, Checkbox, Container } from '@material-ui/core';
import { Formik } from 'formik';


import useStyles from './useStyles';
import Currency from '../../components/Currency/Currency';
import { config } from '../../config/config';
import CartForm from './CartForm/CartForm';
import { useCartContext } from '../../context/cartContext';


const Cart = ():JSX.Element => {
    const classes = useStyles();
    const theme = useTheme();
    const { cart, total } = useCartContext();
    const [free, setFree] = React.useState<boolean>(true)
    const small = useMediaQuery(theme.breakpoints.down('sm'));

    const handleFee = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setFree((prev)=> !prev)
    }
    console.log(cart)

    return (
        <Box py={10} px={!small ? 10: 2}>
            {cart.length ?
                <Box>
                    <Box>
                        <Typography variant="h2">Shopping Cart</Typography>
                    </Box>
                    <Box py={5}>
                        <CartForm />
                    </Box>
                    <Box>
                        <Card>
                            <CardContent>
                                <Formik
                                    initialValues={{
                                        free:''
                                    }}
                                    onSubmit={()=>alert("Submitted")}
                                >
                                    {({ handleSubmit, handleChange, values, isSubmitting })=>(
                                    <form method="post">
                                        <Box display="flex" justifyContent="space-between" flexDirection={small ? 'column' : 'row'} >
                                            <Box>
                                                <Typography variant="h4" className={classes.shippingModeTitle}>Choose Shipping Mode:</Typography>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox checked={free} onChange={handleFee} />}  label="Store Pickup Free" />
                                                    <FormControlLabel control={<Checkbox checked={!free} onChange={handleFee} />}  label="Delivery at home (under 2-4 days) - 5,000" />
                                                </FormGroup>
                                            </Box>
                                            <Box>
                                                <Table className={classes.checkoutTable}>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell>Subtotal</TableCell>
                                                            <TableCell><Currency />{(total).toLocaleString()}</TableCell>
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
                                                            <TableCell><Currency />{free ? (total).toLocaleString() : (total + config.shipping).toLocaleString() }</TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                                {/* <Button variant="contained" type="submit" color="secondary" className={classes.checkoutBtn}>Checkout</Button> */}
                                                <Button variant="contained" color="secondary" className={classes.checkoutBtn} component={Link} to='/checkout'>Checkout</Button>
                                            </Box>
                                        </Box>
                                    </form>
                                    )}
                                </Formik>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            :   
                <Container>
                    <Box display="flex" justifyContent="center" alignItems="center" style={{height:"60vh"}}>
                        <Typography variant="h1">Cart Empty</Typography>
                    </Box>
                </Container>
            }
        </Box>
    )
}

export default Cart;
