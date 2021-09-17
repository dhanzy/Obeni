import React from 'react';
import { Popover, Box, Typography } from '@material-ui/core';

const Notification = ():JSX.Element => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleToggle = (event: any) => {
        event.preventDefault();
        if (anchorEl === null) {
            setAnchorEl(event.currentTarget)
        } else {
            setAnchorEl(null)
        }
    }

    return (
        <Box>
            <Popover 
                open={true}
                onClose={handleToggle}
            >
                <Typography></Typography>
            </Popover>
        </Box>
    )
}

export default Notification;
