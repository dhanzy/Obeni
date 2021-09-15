import React from 'react';
import { Box } from '@material-ui/core';
import { config } from '../../config/config';

const Currency = ():JSX.Element => {
    const currency = config.currency.Naira;

    return (
        <Box component="span" style={{marginRight: '5px', fontWeight: 500}}>
            { currency }
        </Box>
    )
}

export default Currency;
