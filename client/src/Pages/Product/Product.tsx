import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, Container, useMediaQuery, Snackbar } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import { getProductById } from '../../ApiCalls/Product';
import ProductCard from '../../components/ProductCard/ProductCard';
import useStyles from './useStyles';
import AdditionalImages from './AdditionalImages/AdditionalImages';
import Currency from '../../components/Currency/Currency';
import ProductProps from '../../Interface/Product';
import ProductSk from '../../components/Skeleton/ProductSk';
import { useCartContext } from '../../context/cartContext';

import ProductForm from './ProductForm/ProductForm';


interface ProductParams {
    productId: string;
}

const Product = ():JSX.Element => {
    document.title = 'Ogbeni Apparels - Products'

    const { productId } = useParams<ProductParams>()
    const classes = useStyles();
    const theme = useTheme();
    const {updateCartContext} = useCartContext();
    const [product, setProduct] = React.useState<ProductProps>()
    const [isLoading, setIsLoading] = React.useState<boolean>(true)
    const [message, setMessage] = React.useState<string>('')
    const [open, setOpen] = React.useState<boolean>(false)
    const small = useMediaQuery(theme.breakpoints.down('sm'))
    const xsmall = useMediaQuery(theme.breakpoints.down('xs'))

    const handleClose = () => {
        setOpen(false)
    };

    const handleSubmit = (
        {selectedSize, quantity}:{selectedSize:string, quantity:number},
        {setSubmitting}: FormikHelpers<{selectedSize:string, quantity:number}>
    )=>{
            if (product !== undefined){
                setMessage(`Added ${product.title} to cart successfully`)
                setOpen(true)
                updateCartContext({...product, quantity, selectedSize})
                setSubmitting(false)
            }
            setSubmitting(false)
        }
    

    React.useEffect(()=> {
        const fetchProduct = async() => {
            const response = await getProductById(productId);
            if (response){
                if (response.success){
                    setProduct(response.success);
                    setIsLoading(false);
                }
            }
        }
        fetchProduct();

    }, [productId])


    return (
        <Container> 
            <Box px={2} py={10}>
                {isLoading || product === undefined ? 
                    <ProductSk />
                 :
                 <>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item md={6} className={classes.productPanel}>
                                <Box display='flex' className={classes.productGallery} flexDirection={xsmall ? 'column': 'row'}>
                                    <Box className={classes.selectedImage}>
                                        <Card>
                                            <CardMedia component="img" image={product.image} height={small ? "700" : "400"} />
                                        </Card>
                                        <Box mt={1} className={classes.additionalImage}>
                                            <AdditionalImages image={product.image} />
                                            <AdditionalImages  image={product.image} />
                                            <AdditionalImages  image={product.image} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={6}>
                                <Box>
                                    <Typography variant="h2">{ product.title }</Typography>
                                    <Typography variant="h5"><Currency />{ product.price ? (product.price).toLocaleString() : '' }</Typography>
                                    <Box mt={2}>
                                        {product.description}
                                    </Box>
                                    <Box>
                                        <ProductForm product={product} handleSubmit={handleSubmit} />
                                        <Box  mt={5} py={1}>
                                            <Typography component="p">SKU: {product._id}</Typography>
                                            <Typography component="p">Tags: </Typography>
                                            {product.categories.map((cat)=> (
                                                <Box key={cat}>
                                                    {cat}
                                                </Box>
                                            ))}
                                            <Typography component="p">Availability: 8 items in stock</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box py={5}>
                        <Box>
                            <Typography variant="h3">Description</Typography>
                        </Box>
                        <Box>
                            <Typography component="p">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Dolor odit est repudiandae nulla libero ea esse! Eligendi quasi exercitationem 
                            quae vero asperiores, cupiditate facere nihil reiciendis veniam perspiciatis 
                            deleniti eos ad magni quaerat optio culpa tenetur blanditiis mollitia? 
                            Quam error nobis commodi cum! Ex iusto impedit earum magni provident qui illum 
                            omnis quod consequatur obcaecati, cum ipsum adipisci assumenda id ducimus 
                            inventore laborum est fugiat reprehenderit commodi mollitia. Tempore iste 
                            veritatis cumque dolore, ratione enim totam corrupti ad, aut, tempora nesciunt 
                            magni possimus recusandae odio necessitatibus repellendus laborum? Eius dolore 
                            sit maiores dicta nisi! Deserunt ratione quisquam ex illo, odio repellat 
                            consectetur quibusdam minima culpa minus possimus, rem enim ipsam error 
                            perspiciatis aliquam nesciunt porro. Cumque, asperiores obcaecati.
                            Odio totam obcaecati ipsam recusandae velit corporis rem odit a?
                            </Typography>
                        </Box>
                    </Box>
                    <Box mt={3}>
                        <Typography variant="h3">Related Products</Typography>
                        <Box mt={2}>
                            <Grid container spacing={2}>
                                <Grid item md={3} sm={6} xs={6}>
                                    <ProductCard />
                                </Grid>
                                <Grid item md={3} sm={6} xs={6}>
                                    <ProductCard />
                                </Grid>
                                <Grid item md={3} sm={6} xs={6}>
                                    <ProductCard />
                                </Grid>
                                <Grid item md={3} sm={6} xs={6}>
                                    <ProductCard />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Snackbar
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={open}
                        onClose={handleClose}
                        message={message}
                        autoHideDuration={6000}
                        style={{marginTop:'100px'}}
                    />
                </>
                }
            </Box>
        </Container>
    )
}

export default Product;
