import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, Typography, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import ProductCardProps from '../../Interface/ProductCard';
import Currency from '../Currency/Currency';


const ProductCard:React.FC<ProductCardProps> = (props): JSX.Element => {
    return (
        <Box>
            <Card>
                <CardActionArea component={Link} to='/product'>
                    <CardMedia component="img" image={props.image} height="400" />
                    <CardContent>
                        <Box>
                            <Typography variant="h5">{props.productTitle}</Typography>
                            <Typography variant="h5"><Box component="span"></Box><Currency />{props.productPrice}</Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )
}

export default ProductCard;
