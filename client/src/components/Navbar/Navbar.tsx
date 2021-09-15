import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Container, Toolbar, Box, Typography, Button, useScrollTrigger, Slide, useMediaQuery, IconButton, Badge, ClickAwayListener } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';


import useStyles from './useStyles';


interface Props {
    children: React.ReactElement;
  }

interface NavBarProps {
    dark?: boolean,
}
  
function HideOnScroll(props: Props) {
    const { children } = props;
    const trigger = useScrollTrigger({ 
        threshold: 0,
        disableHysteresis: true
    });

    return React.cloneElement(
        <Slide appear={false} direction="down" in={!trigger}>
        {children}
        </Slide>
    );
}

const Navbar = (props: NavBarProps): JSX.Element => {
    const classes = useStyles();
    const location = useLocation();
    const theme = useTheme()
    const [open, setOpen] = React.useState<boolean>(false);

    const medium = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClick = () => {
        setOpen((prev) => !prev);
    };
    
    const handleClickAway = () => {
        setOpen(false);
    };

    return (
        <HideOnScroll>
            <AppBar elevation={0} className={props.dark ?  '' : classes.appBar}>
                <Container>
                    <Toolbar className={classes.toolbar}>
                        <Box>
                            <Button component={Link} to="/">
                                <Typography variant="h4">Ogbeni</Typography>
                            </Button>
                        </Box>
                        <Box>
                            {medium ?
                                ( 
                                <ClickAwayListener onClickAway={handleClickAway}>
                                    <Box>
                                    <IconButton style={{color:'#fff'}} onClick={handleClick} >
                                        <MenuIcon />
                                    </IconButton>
                                    {open ? (
                                        <Box className={classes.navlink}>
                                            <Button component={Link} to="/men" className={location.pathname === "/men" ? 'active' : ''}>Men</Button>
                                            <Button component={Link} to="/women" className={location.pathname === "/women" ? 'active' : ''}>Women</Button>
                                            <Button component={Link} to="/collection" className={location.pathname === "/collection" ? 'active' : ''}>Collection</Button>
                                            <IconButton style={{color:'#fff'}}>
                                                <Search />
                                            </IconButton>
                                            <IconButton style={{color:'#fff'}} component={Link} to="/cart" className={location.pathname === "/cart" ? 'active' : ''}>
                                                <Badge badgeContent={4} color="secondary">
                                                    <ShoppingCartOutlined />
                                                </Badge>
                                            </IconButton>
                                        </Box>
                                    
                                    ) : null}  
                                    </Box>    
                                </ClickAwayListener>
                            ) : (
                            <Box className={classes.navlink}>
                                <Button component={Link} to="/men" className={location.pathname === "/men" ? 'active' : ''}>Men</Button>
                                <Button component={Link} to="/women" className={location.pathname === "/women" ? 'active' : ''}>Women</Button>
                                <Button component={Link} to="/collection" className={location.pathname === "/collection" ? 'active' : ''}>Collection</Button>
                                <IconButton style={{color:'#fff'}}>
                                    <Search />
                                </IconButton>
                                <IconButton style={{color:'#fff'}} component={Link} to="/cart" className={location.pathname === "/cart" ? 'active' : ''}>
                                    <Badge badgeContent={4} color="secondary">
                                        <ShoppingCartOutlined />
                                    </Badge>
                                </IconButton>
                            </Box>
                            )}
                        </Box>
                            {/* <Box>
                                <IconButton style={{color:'#fff'}} onClick={handleMediumMenu} >
                                     <MenuIcon />
                                 </IconButton>
                                 <Box style={{display: snackBarActive ? 'block' : 'none'}}>
                                     <Button component={Link} to="/men" className={location.pathname === "/men" ? 'active' : ''}>Men</Button>
                                     <Button component={Link} to="/women" className={location.pathname === "/women" ? 'active' : ''}>Women</Button>
                                     <Button component={Link} to="/collection" className={location.pathname === "/collection" ? 'active' : ''}>Collection</Button>
                                     <IconButton style={{color:'#fff'}} component={Link} to="/cart" className={location.pathname === "/cart" ? 'active' : ''}>
                                         <Search />
                                     </IconButton>
                                     <Button component={Link} to="/cart" className={location.pathname === "/cart" ? 'active' : ''}>Cart</Button>
                                     <Button component={Link} to="/checkout" className={location.pathname === "/checkout" ? 'active' : ''}>Checkout</Button>
                                 </Box>
                             </Box> */}
                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
    )
}

export default Navbar;
