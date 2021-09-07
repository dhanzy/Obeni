import React from 'react';
import { Card, CardMedia } from '@material-ui/core';

const AdditionalImages = (): JSX.Element => {
    return (
        <Card>
            <CardMedia component="img" image="https://images.pexels.com/photos/6652928/pexels-photo-6652928.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="100"/>
        </Card>
    )
}

export default AdditionalImages;
