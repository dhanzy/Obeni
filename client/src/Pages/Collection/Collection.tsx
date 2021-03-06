import React from 'react'
import { Box, Grid, Typography, CardMedia, ButtonGroup, Button } from '@material-ui/core';
import AOS from 'aos';
import { useParams } from 'react-router-dom';

import 'aos/dist/aos.css';

import useStyles from './useStyles';
import ProductCard from '../../components/ProductCard/ProductCard'
import ProductCardSk from '../../components/Skeleton/ProductCardSk'
import { getProducts } from '../../ApiCalls/Product';

import Product from '../../Interface/Product';

const Collection = ():JSX.Element => {
    const classes = useStyles();
    const {category } = useParams<{category?: string}>();
    const [products, setProducts] = React.useState<Product[] | []>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(true)
    const COUNTER = 6;
    React.useEffect(()=> {
        const fetchProducts = async() => {
            if (category){
                const response = await getProducts(false,category);
                if (response){
                    if (response.success){
                        setProducts(response.success);
                        setIsLoading(false);
                    }
                }
            }
            else{
                const response = await getProducts();
                if (response){
                    if (response.success){
                        setProducts(response.success);
                        setIsLoading(false);
                    }
                }
            }
        }
        fetchProducts();

    }, [category])
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
        once: true
    })
    
    return (
        <Box>
            <Box className={classes.top}>
                <CardMedia 
                    component="img" 
                    image="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <Box className={classes.desc}>
                    <Typography variant="h3">2020/2021 Collection</Typography>
                    <Typography component="p">Checkout our collection</Typography>
                </Box>
            </Box>
            <Box py={2} px={2}>
                <Grid container spacing={1}>
                    <Grid item md={2} sm={2}>
                        <Box p={2} className={classes.sidePanel}>
                            <Typography component="p">All</Typography>
                            <Typography component="p">New Arrivals</Typography>
                            <Typography component="p">Brand</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={10} sm={10}>
                        <Grid container spacing={2}>
                            {isLoading ? 
                                Array.from(Array(COUNTER), (_, i) =>(
                                    <Grid item md={4} sm={6} key={i}>
                                        <ProductCardSk />
                                    </Grid>
                                ))
                                :
                                products.map((product) => (
                                    <Grid item md={4} sm={6} xs={6} data-aos="fade-up" key={product.title} >
                                        <ProductCard image={product.image} title={product.title} price={product.price} _id={product._id} />
                                    </Grid>
                                ))
                            } 
                        </Grid>

                        {!isLoading && 
                            <Box py={5} display="flex" justifyContent="center">
                                <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                                    <Button>One</Button>
                                    <Button>Two</Button>
                                    <Button>Three</Button>
                                </ButtonGroup>
                            </Box>
                        }
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Collection;
