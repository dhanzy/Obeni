import React from 'react';
import {  MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Collection from './Pages/Collection/Collection';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout'

import theme from './Theme/theme';

const App = (): JSX.Element => {
    return (
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <CssBaseline />
                <Switch>
                    <Route exact path="/">
                        <Navbar />
                        <Home />
                    </Route>
                    <Route exact path="/product/:productName">
                        <Navbar dark={true} />
                        <Product />
                    </Route>
                    <Route exact path="/men">
                        <Navbar dark={true} />
                        <Collection />
                    </Route>
                    <Route exact path="/women">
                        <Navbar dark={true} />
                        <Collection />
                    </Route>
                    <Route exact path="/collection">
                        <Navbar dark={true} />
                        <Collection />
                    </Route>
                    <Route exact path="/cart">
                        <Navbar dark={true} />
                        <Cart />
                    </Route>
                    <Route exact path="/checkout">
                        <Navbar dark={true} />
                        <Checkout />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </MuiThemeProvider>
    )
}

export default App;
