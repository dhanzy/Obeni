import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, Typography, CardActionArea, CardMedia, CardContent } from '@material-ui/core';

const ProductCard = (): JSX.Element => {
    return (
        <Box>
            <Card>
                <CardActionArea component={Link} to='/product'>
                    <CardMedia component="img" image="https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="400" />
                    <CardContent>
                        <Box>
                            <Typography variant="h5">Tyler-Tshirt</Typography>
                            <Typography variant="h5"><Box component="span"></Box>15,000</Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )
}

export default ProductCard;
