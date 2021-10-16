import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Grid, Card, CardActionArea, CardMedia, CardContent, Tabs, Tab } from '@material-ui/core';
import { useTransition, useSpring, animated, config } from 'react-spring';
import useInterval from '../../components/useInterval/useInterval';


// import { Zoom, Fade} from 'react-reveal';

import useStyles from './useStyles';
import { getProductByCategory, getTopProducts } from '../../ApiCalls/Product';
import Product from '../../Interface/Product';
import ProductCard from '../../components/ProductCard/ProductCard';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div hidden={value !== index} id={`landingtab-panel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
            {value === index && <Box py={3}>{children}</Box>}
        </div>
    );
}

const listItems = [
        {id: 0, url:'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
        {id: 1, url:'https://images.pexels.com/photos/4904563/pexels-photo-4904563.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {id: 2, url:'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
        {id: 3, url:'https://images.pexels.com/photos/8271460/pexels-photo-8271460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
    ]

const Home = ():JSX.Element => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [index, setIndex] = React.useState(0);
    const [topProducts, setTopProducts] = React.useState<Product[] | []>([]);
    const [menProduct, setMenProduct] = React.useState<Product[] | []>([]);
    const [womenProduct, setWomenProduct] = React.useState<Product[] | []>([]);

    const increment = () => setIndex(state => (state + 1) % listItems.length) 
    useInterval(increment, 5000);

    const transitions = useTransition(listItems[index], {
        keys: item=>item.id,
        from: {opacity: 0, transform: 'scale(1.1)'},
        enter: {opacity: 1, transform: 'scale(1)'},
        leave: {opacity: 0, transform: 'scale(0.9)'}
    })

    const animateText = useSpring({
        from: { opacity: 0},
        to: [
            { opacity: 1},
            { opacity: 1, color: '#ffaaee' },
            { opacity: 1, color: 'red' },
            { opacity: .5, color: '#008000' },
            { opacity: .8, color: 'black' }
        ],
        delay: 400,
        config: config.molasses
    })

    const animateBack = useSpring({
        from: {background: "url(https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"},
        to: [
            {background: "url(https://images.pexels.com/photos/4904563/pexels-photo-4904563.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"},
            {background: "url(https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"},
            {background: "url(https://images.pexels.com/photos/8271460/pexels-photo-8271460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"}
        ]
    })

    const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
        setValue(newValue);
    }


    React.useEffect(()=> {
        const fetchProducts = async() => {
            const response = await getTopProducts(2);
            if (response){
                if (response.success){
                    const products:Product[] = response.success
                    setTopProducts(products)
                }
            }
        }
        fetchProducts()    
    }, [])


    React.useEffect(()=> {
        const fetchProducts = async() => {
            const response = await getProductByCategory('men',4);
            if (response){
                if (response.success){
                    const products:Product[] = response.success
                    setMenProduct(products)
                }
            }
        }
        fetchProducts();
    }, [])

    React.useEffect(()=> {
        const fetchProducts = async() => {
            const response = await getProductByCategory('women',4);
            if (response){
                if (response.success){
                    const products:Product[] = response.success
                    setWomenProduct(products)
                }
            }
        }
        fetchProducts();

    }, [])


    return (
        <Box className={classes.root}>
            <Box className={[classes.section, classes.homeSection].join(' ')}>
                <div style={{
                    background: 'url(https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) 0% 0% / 100% no-repeat',
                    position: 'relative',
                    height: '1023px',
                    width: '1920px',
                    transformOrigin: '0px 0px',
                    transform: 'scale(1)'
                    }}>
                    <Box className={classes.mainDesc}>
                        <Typography variant="h1" color="secondary">Summer<br/>Collection</Typography>
                        <animated.p style={animateText}>Introducing the most comfortable and popular brand ogbeni apparels collection</animated.p>
                        <Box mt={2}>
                            <Button variant="contained" color="secondary">Shop Now</Button>
                        </Box>                    
                    </Box>
                </div>
            </Box>
            <Box className={classes.section}>
                <Box p={5}>
                    <Grid container>
                        <Grid item md={6} sm={6} xs={12} className={classes.cardCollectionImage} >
                            <Card>
                                <CardActionArea component={Link} to="/men">
                                    <CardMedia component="img" image="https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="350" />
                                    <CardContent>
                                        <Typography variant="h3">Men<br/>Collection</Typography>
                                        <Button variant="outlined" color="primary">Shop Now</Button>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item md={6} sm={6} xs={12} className={classes.cardCollectionImage} >
                            <Card>
                                <CardActionArea component={Link} to="women">
                                        <CardMedia component="img" image="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" height="350"/>
                                        <CardContent>
                                        <Typography variant="h3">Women<br/>Collection</Typography>
                                            <Button variant="outlined" color="primary">Shop Now</Button>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box className={classes.section}>
                <Box>
                    <Grid container>
                        <Grid item md={6}>
                            <CardMedia component="img" image="" />
                        </Grid>
                        <Grid item md={6}>
                            <Box p={5}>
                                <Typography variant="h3">Daily Deal</Typography>
                                <Typography component="p" color="secondary">Deals <Box component="span" color="primary">35%</Box> for all suit products</Typography>
                                <Grid container spacing={1}>
                                    {topProducts.map((product) => (
                                        <Grid item md={6} key={product.title}>
                                            <ProductCard price={product.price} image={product.image} title={product.title} _id={product._id} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box className={classes.section}>
                <Box p={5}>
                    <Typography variant="h2">Featured Products</Typography>
                    <Box>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="Men"></Tab>
                            <Tab label="women"></Tab>
                        </Tabs>
                        <Box>
                            <TabPanel index={0} value={value}>
                                <Grid container spacing={2}>
                                    {menProduct.map((product) => (
                                        <Grid item md={3} sm={6} xs={12} key={product.title}>
                                            <ProductCard price={product.price} image={product.image} title={product.title} _id={product._id}/>
                                        </Grid>
                                    ))}
                                </Grid>
                            </TabPanel>
                            <TabPanel index={1} value={value}>
                                <Grid container spacing={2}>
                                    {womenProduct.map((product, index) => (
                                        <Grid item md={3} sm={6} xs={12} key={index}>
                                            <ProductCard image={product.image} price={product.price} title={product.title} _id={product._id} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </TabPanel>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Home;
