import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, Typography, CardActionArea, CardMedia, CardContent, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ProductCardProps from '../../Interface/ProductCard';
import Currency from '../Currency/Currency';


const ProductCard:React.FC<ProductCardProps> = (props): JSX.Element => {
    const theme = useTheme();
    const xsmall = useMediaQuery(theme.breakpoints.down('xs'));
    return (
        <Box>
            <Card>
                <CardActionArea component={Link} to={'/product/' + props._id}>
                    <CardMedia component="img" image={props.image} height={!xsmall ? "400" : '200'} />
                    <CardContent>
                        <Box>
                            <Typography variant="h5">{props.title}</Typography>
                            <Typography variant="h5"><Box component="span"></Box><Currency />{props.price ? (props.price).toLocaleString() : ''}</Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )
}

export default ProductCard;
