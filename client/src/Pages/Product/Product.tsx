import React from 'react';
import { Box, Grid, ButtonGroup, Typography, Button, Card, CardMedia, Input, Container } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';

import ProductCard from '../../components/ProductCard/ProductCard';
import useStyles from './useStyles';
import AdditionalImages from './AdditionalImages/AdditionalImages';

const Product = ():JSX.Element => {
    document.title = 'Ogbeni Apparels - Products'
    const classes = useStyles();

    return (
        <Container> 
            <Box p={2}>
                <Box p={10}>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Box display='flex' className={classes.productGallery}>
                                <Box className={classes.additionalImage}>
                                    <AdditionalImages />
                                    <AdditionalImages />
                                    <AdditionalImages />
                                </Box>
                                <Box className={classes.selectedImage}>
                                    <Card>
                                        <CardMedia component="img" image="https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="400"/>
                                    </Card>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={6}>
                            <Box>
                                <Typography variant="h3">Leather Jacket</Typography>
                                <Typography variant="h5">45,000</Typography>
                                <Box mt={2}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    At tempora, alias inventore distinctio magni aut eligendi. 
                                    Esse unde amet consequatur sed ipsam, in consequuntur omnis ea placeat, 
                                    sint laboriosam voluptatem sunt reprehenderit!
                                </Box>
                                <Box>
                                    <form method="post">
                                        <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                                            <Typography variant="h5">Size</Typography>
                                            <ButtonGroup>
                                                <Button><Add /></Button>
                                                <Input type="number" value="1"/>
                                                <Button><Remove /></Button>
                                            </ButtonGroup>
                                        </Box>
                                        <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                                            <Typography variant="h5">Quantity</Typography>
                                            <ButtonGroup>
                                                <Button><Add /></Button>
                                                <Input type="number" value="1"/>
                                                <Button><Remove /></Button>
                                            </ButtonGroup>
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
                            <Grid item md={3} sm={6}>
                                <ProductCard />
                            </Grid>
                            <Grid item md={3} sm={6}>
                                <ProductCard />
                            </Grid>
                            <Grid item md={3} sm={6}>
                                <ProductCard />
                            </Grid>
                            <Grid item md={3} sm={6}>
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
