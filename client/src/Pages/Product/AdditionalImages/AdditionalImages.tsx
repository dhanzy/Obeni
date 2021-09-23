import React from 'react';
import { Card, CardMedia } from '@material-ui/core';
import useStyles from './useStyles';

interface AdditionalImagesProps{
    image?: string;
};

const AdditionalImages:React.FC<AdditionalImagesProps> = (props): JSX.Element => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia component="img" image={props.image? props.image : "https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} height="100"/>
        </Card>
    )
}

export default AdditionalImages;
