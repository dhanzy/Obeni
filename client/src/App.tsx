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
import { CartProvider } from './context/cartContext';

const App = (): JSX.Element => {
    return (
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <CartProvider>
                    <CssBaseline />
                    <Switch>
                        <Route exact path="/">
                            <Navbar />
                            <Home />
                        </Route>
                        <Route exact path="/product/:productId">
                            <Navbar dark={true} />
                            <Product />
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
                        <Route exact path="/:category">
                            <Navbar dark={true} />
                            <Collection />
                        </Route>
                    </Switch>
                    <Footer />
                </CartProvider>
            </BrowserRouter>
        </MuiThemeProvider>
    )
}

export default App;
