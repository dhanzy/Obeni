import React from 'react'
import { Box, Button, Typography, Table, TableHead, TableRow, TableBody, TableCell, Input, ButtonGroup, IconButton, Card, CardContent,FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import { Add, Cancel, Remove } from '@material-ui/icons';

import useStyles from './useStyles';



const Cart = ():JSX.Element => {
    const classes = useStyles();
    const [free, setFree] = React.useState<boolean>(true)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setFree((prev)=> !prev)
    }

    return (
        <Box py={10} px={10}>
            <Box>
                <Box>
                    <Typography variant="h2">Shopping Cart</Typography>
                </Box>
                <Box py={5}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell>Size</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Total Price</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Henley Tshirt</TableCell>
                                <TableCell>s</TableCell>
                                <TableCell>
                                    <Box>
                                        <ButtonGroup>
                                            <Button><Remove /></Button>
                                            <Input value="2" type="number" className={classes.cartQtyInput} />
                                            <Button><Add /></Button>
                                        </ButtonGroup>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box>
                                        <Typography><Box component="span"></Box> 39000</Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <IconButton>
                                        <Cancel />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Box p={2}>
                        <Box mt={2}>
                            <Button variant="outlined" color="secondary">Continue Shopping</Button>
                            <Button variant="outlined" color="secondary" style={{marginLeft: '20px'}}>Update Cart</Button>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Card>
                        <CardContent>
                            <form method="post">
                                <Box display="flex" justifyContent="space-between">
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
                                                    <TableCell>25,000</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Shipping</TableCell>
                                                    <TableCell>Free</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Total</TableCell>
                                                    <TableCell>Subtotal</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                        <Button variant="contained" type="submit" color="secondary" className={classes.checkoutBtn}>Checkout</Button>
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
