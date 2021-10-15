import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Grid, Card, CardActionArea, CardMedia, CardContent, Tabs, Tab, Grow } from '@material-ui/core';
import { useTransition, animated } from 'react-spring';
import useInterval from '../../components/useInterval/useInterval';

import Sensor from '../../components/Sensor/Sensor';
// import { MenData, WomenData } from '../../Dummydata/Data';

// import { Zoom, Fade} from 'react-reveal';

import useStyles from './useStyles';
import { getProductByCategory } from '../../ApiCalls/Product';
import Product from '../../Interface/Product';
import ProductCard from '../../components/ProductCard/ProductCard';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel
(props: TabPanelProps) {
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
    const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
        setValue(newValue);
    }

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
                    {transitions((style, item) => (
                        <animated.img src={item.url} className={['MuiCardMedia-root','MuiCardMedia-media', 'MuiCardMedia-img'].join(' ')} style={style} alt="" />
                    ))}
                    <Box className={classes.mainDesc}>
                        <Typography variant="h1" color="secondary">Summer<br/>Collection</Typography>
                        <Typography component="p">Introducing the most comfortable and popular brand ogbeni apparels collection</Typography>
                        <Box mt={2}>
                            <Button variant="contained" color="secondary">Shop Now</Button>
                        </Box>                    
                    </Box>
                </Box>
            <Box className={classes.section}>
                <Box p={5}>
                    <Grid container>
                        <Grid item md={6} sm={6} xs={12} className={classes.cardCollectionImage} >
                            <Sensor once>
                                {({ isVisible }: any) => (
                                    <Grow in={isVisible} style={{ transformOrigin: '0 0 0' }} >
                                        <Card>
                                            <CardActionArea component={Link} to="/men">
                                                <CardMedia component="img" image="https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="350" />
                                                <CardContent>
                                                    <Typography variant="h3">Men<br/>Collection</Typography>
                                                    <Button variant="outlined" color="primary">Shop Now</Button>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grow>
                                )}
                            </Sensor>
                        </Grid>
                        <Grid item md={6} sm={6} xs={12} className={classes.cardCollectionImage} >
                            <Sensor once>
                                {({ isVisible }: any) => (
                                <Grow in={isVisible} style={{ transformOrigin: '0 0 0' }} {...(isVisible ? { timeout: 2000 } : {})} >
                                    <Card>
                                        <CardActionArea component={Link} to="women">
                                                <CardMedia component="img" image="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" height="350"/>
                                                <CardContent>
                                                <Typography variant="h3">Women<br/>Collection</Typography>
                                                    <Button variant="outlined" color="primary">Shop Now</Button>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grow>
                                )}
                            </Sensor>
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
                                    <Grid item>
                                        <ProductCard />
                                    </Grid>
                                    <Grid item>
                                        <ProductCard />
                                    </Grid>
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
                                    {menProduct.map((product, index) => (
                                        <Grid item md={3} sm={6} xs={12} key={index}>
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
