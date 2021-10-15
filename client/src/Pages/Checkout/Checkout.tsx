import React from 'react'
import { useTheme } from '@material-ui/core/styles';
import { Box, Grid, FormControl, TextField, useMediaQuery, Container, Typography } from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik';
import { usePaystackPayment } from 'react-paystack';
import * as Yup from 'yup';


import { useCartContext } from '../../context/cartContext';
import PaymentCard from '../../components/PaymentCard/PaymentCard';
import { verifyTransaction } from '../../ApiCalls/transaction';
import useStyles from './useStyles';
import { config as config2 } from '../../config/config';

const Checkout = ():JSX.Element => {
    document.title = 'Ogbeni Apparels - Checkout Page'
    const classes = useStyles();
    const theme = useTheme();
    const { cart, total } = useCartContext();
    const small = useMediaQuery(theme.breakpoints.down('sm'));
    const [firstname, setFirstName] = React.useState<string>('')
    const [lastname, setLastName] = React.useState<string>('')
    const [phone, setPhone] = React.useState<string>('')
    const [email, setEmail] = React.useState<string>('')
    const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY !== undefined ? process.env.REACT_APP_PAYSTACK_PUBLIC_KEY : ''
    const amount = (total + config2.shipping) * 100
    const config = {
        email,
        amount,
        publicKey,
        firstname,
        lastname,
        phone,
    }
    const onSuccess = (response: any) =>{
        console.log(response);
        verifyTransaction(response, cart);
        alert("Thanks for doing buisness with us!")
    }

    const onClose = () => {
        alert('Wait! you need this product, Don\'t go')
    }

    let initializePayment = usePaystackPayment(config);

    const handleSubmit = (
        {firstname, lastname, streetaddr, email,phone}:{firstname:string, lastname:string, streetaddr:string, email: string, phone: string},
        {setSubmitting}: FormikHelpers<{firstname:string, lastname:string, streetaddr: string, email: string, phone: string}>
    )=>{
        setEmail(email)
        setFirstName(firstname)
        setLastName(lastname)
        setPhone(phone)
        initializePayment(onSuccess, onClose)
    }

    return (
        <Box py={10} px={!small ? 8 : 2}>
            {cart.length ? 
            <Formik
                initialValues = {{
                    firstname: '',
                    lastname: '',
                    streetaddr: '',
                    email: '',
                    phone
                }}
                validationSchema={Yup.object().shape({
                    firstname: Yup.string().required('First name is required'),
                    lastname: Yup.string().required('Last name is required'),
                    email: Yup.string().required('Email is Required').email('Invalid Email Address'),
                    phone: Yup.string().required('Phone Number is required'),
                  })}
                onSubmit={handleSubmit}
            >
            {({handleSubmit, handleChange, values, touched, errors})=>(
            <form method="post" onSubmit={handleSubmit}>
                <Grid container spacing={5}>
                    <Grid item md={8}>
                        
                            <Box>
                                <FormControl className={[classes.margin, classes.textField, classes.marginRight].join(' ')}>
                                    <TextField label="First Name" name="firstname" type="text" value={values.firstname} onChange={handleChange} error={touched.firstname && Boolean(errors.firstname)} helperText={touched.firstname ? errors.firstname: ''} />
                                </FormControl>
                                <FormControl className={[classes.margin, classes.textField, classes.marginLeft].join(' ')}>                                    
                                    <TextField label="Last Name" name="lastname" type="text" value={values.lastname} onChange={handleChange} error={touched.lastname && Boolean(errors.lastname)} helperText={touched.lastname ? errors.lastname: ''} />
                                </FormControl>
                                <Box>
                                    <FormControl fullWidth className={classes.margin}>
                                        <TextField label="Street Address" name="streetaddr" type="text" value={values.streetaddr} onChange={handleChange} />
                                    </FormControl>
                                    <FormControl fullWidth className={classes.margin}>
                                        <TextField label="Town/City" type="text" />
                                    </FormControl>
                                    <FormControl fullWidth className={classes.margin}>
                                        <TextField label="State/Country" type="text" />
                                    </FormControl>
                                    <FormControl fullWidth className={classes.margin}>
                                        <TextField label="Phone" type="phone" name="phone" value={values.phone} onChange={handleChange} error={touched.phone && Boolean(errors.phone)} helperText={touched.phone ? errors.phone: ''}/>
                                    </FormControl>
                                    <FormControl fullWidth className={classes.margin}>
                                        <TextField label="Email Address" name="email" type="email" value={values.email} onChange={handleChange} error={touched.email && Boolean(errors.email)} helperText={touched.email ? errors.email: ''} />
                                    </FormControl>
                                </Box>
                            </Box>
                    </Grid>
                    <Grid item md={4}>
                        <PaymentCard />
                    </Grid>
                </Grid>
            </form>
            )}
            </Formik>
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

export default Checkout;
