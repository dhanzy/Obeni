import React from 'react'
import { Box, Button, Typography, TextField, RadioGroup, FormControlLabel, Radio, CircularProgress } from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik';

import Product from '../../../Interface/Product';
import useStyles from './useStyles';



interface ProductParams {
    product: Product;
    handleSubmit: (
        {selectedSize, quantity}:{selectedSize: string, quantity: number}, 
        {setSubmitting}: FormikHelpers<{selectedSize: string, quantity: number}>
        ) => void;
}



const ProductForm: React.FC<ProductParams> = ({product, handleSubmit}): JSX.Element => {
    const classes = useStyles();
    return (
    <Formik
        initialValues={{
            selectedSize: '',
            quantity: 1
        }}
        onSubmit={handleSubmit}
    >
        {({handleSubmit, handleChange, values, isSubmitting})=> (
        <form method="post" onSubmit={handleSubmit}>
            <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center" className={classes.sizeContainer}>
                    <Typography variant="h5">Size</Typography>
                    <Box ml={2}>
                        <RadioGroup row name="selectedSize">
                        {product.size.map((s, index)=>(
                            <>
                                <FormControlLabel key={`${s}-${index}`} value={s} control={<Radio />} label={s} onChange={handleChange} className={values.selectedSize === s ? 'active' : ''} />
                            </>
                        ))}
                        </RadioGroup>
                    </Box>
                </Box>
            </Box>
            <Box mt={2} display="flex" alignItems="center">
                <Typography variant="h5">Quantity</Typography>
                <Box ml={2}>
                <TextField name="quantity" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 1, max: 10 }} value={values.quantity} onChange={handleChange} variant="outlined" style={{width: '10ch'}} type="number" />
                </Box>
            </Box>
            <Box mt={2}>
                {values.selectedSize !== '' ? 
                    <Button type="submit" variant="contained" color="secondary" disabled={isSubmitting}>{isSubmitting ? <CircularProgress /> : "Add to Cart"}</Button>
                    :
                    <Button type="submit" variant="contained" color="secondary" disabled>Add to Cart</Button>
                }
            </Box>
        </form>
        )}
    </Formik>
    )
}

export default ProductForm
