import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Grid, Card, CardActionArea, CardMedia, CardContent, Tabs, Tab, Zoom, Grow } from '@material-ui/core';
import VisibilitySensor from 'react-visibility-sensor';

import useStyles from './useStyles';
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

const Home = ():JSX.Element => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
        setValue(newValue);
    }

    return (
        <Box className={classes.root}>
            <VisibilitySensor>
                {({isVisible}) => (
                    <Box className={[classes.section, classes.homeSection].join(' ')}>
                        <Zoom in={isVisible} style={{transitionDelay: isVisible ? '500ms' : '0ms' }}>
                            <CardMedia component="img" image="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </Zoom>
                        <Box className={classes.mainDesc}>
                            <Typography variant="h1" color="secondary">Summer<br/>Collection</Typography>
                            <Typography component="p">Introducing the most comfortable and popular brand ogbeni apparels collection</Typography>
                            <Box mt={2}>
                                <Button variant="contained" color="secondary">Shop Now</Button>
                            </Box>                    
                        </Box>
                    </Box>
                )}
            </VisibilitySensor>
            <Box className={classes.section}>
                <VisibilitySensor>
                    {({isVisible}) => (
                    <Box p={5}>
                        <Grid container>
                            <Grid item md={6} sm={6} xs={12} className={classes.cardCollectionImage} >
                                <Grow in={isVisible}>
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
                            </Grid>
                            <Grid item md={6} sm={6} xs={12} className={classes.cardCollectionImage} >
                                <Grow in={isVisible} style={{transformOrigin: '0 0 0'}} {...(isVisible ? { timeout: 1000 } : {})}>
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
                            </Grid>
                        </Grid>
                    </Box>
                    )}
                </VisibilitySensor>
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
                            </TabPanel>
                            <TabPanel index={1} value={value}>
                                <Grid container>
                                    <Grid item></Grid>
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
