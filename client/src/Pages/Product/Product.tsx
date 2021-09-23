import React from 'react';
import { Box, Grid, Typography, Button, Card, CardMedia, Input, Container, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles'
import { Add, Remove } from '@material-ui/icons';
import { useParams } from 'react-router-dom';

import { ProductData } from '../../Dummydata/Data';
import ProductCard from '../../components/ProductCard/ProductCard';
import useStyles from './useStyles';
import AdditionalImages from './AdditionalImages/AdditionalImages';
import Currency from '../../components/Currency/Currency';

interface ProductParams {
    productName: string;
}


const Product = ():JSX.Element => {
    document.title = 'Ogbeni Apparels - Products'

    const { productName } = useParams<ProductParams>()
    const classes = useStyles();
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('sm'))

    const product = ProductData.filter((prod: any) => { return prod.productName === productName})[0];
    console.log(product);
    if (!product) {
        return (
            <Box style={{height: '80vh'}} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <Typography variant="h1">404</Typography>
                <Typography variant="h3">Page Not Found</Typography>
            </Box>
        )
    }

    return (
        <Container> 
            <Box px={2} py={10}>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item md={6} className={classes.productPanel}>
                            <Box display='flex' className={classes.productGallery} flexDirection={small ? 'column': 'row'}>
                                <Box className={classes.additionalImage} display={small && "flex"} justifyContent={small && 'space-evenly'}>
                                    <AdditionalImages image={product.image} />
                                    <AdditionalImages  image={product.image} />
                                    <AdditionalImages  image={product.image} />
                                </Box>
                                <Box className={classes.selectedImage}>
                                    <Card>
                                        <CardMedia component="img" image={product.image} height="400"/>
                                    </Card>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={6}>
                            <Box>
                                <Typography variant="h3">{ product.productName }</Typography>
                                <Typography variant="h5"><Currency />{ product.productPrice ? (product.productPrice).toLocaleString() : '' }</Typography>
                                <Box mt={2}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    At tempora, alias inventore distinctio magni aut eligendi. 
                                    Esse unde amet consequatur sed ipsam, in consequuntur omnis ea placeat, 
                                    sint laboriosam voluptatem sunt reprehenderit!
                                </Box>
                                <Box>
                                    <form method="post">
                                        <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                                            <Typography variant="h5">{ product.productSize }</Typography>
                                            <Box display="flex">
                                                <Button><Add /></Button>
                                                <Input type="number" value="1"/>
                                                <Button><Remove /></Button>
                                            </Box>
                                        </Box>
                                        <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                                            <Typography variant="h5">Quantity</Typography>
                                            <Box>
                                                <Button><Add /></Button>
                                                <Input type="number" value="1"/>
                                                <Button><Remove /></Button>
                                            </Box>
                                        </Box>
                                        <Box mt={2}>
                                            <Button type="submit" variant="contained" color="secondary" fullWidth>Add to Cart</Button>
                                        </Box>
                                    </form>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Box>Description</Box>
                    <Box>
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
                    </Box>
                </Box>
                <Box mt={3}>
                    <Typography variant="h2">Related Products</Typography>
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
            </Box>
        </Container>
    )
}

export default Product;
