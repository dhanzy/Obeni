import React from 'react';
import { Snackbar } from '@material-ui/core';

interface NotificationProps {
    message: string;
}

const Notification: React.FC<NotificationProps> = (message):JSX.Element => {
    const [open, setOpen] = React.useState<boolean>(true)
    const handleClose = () => {
        setOpen(false)
    };
    console.log('Running notification')
    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                onClose={handleClose}
                message={message}
            />
        </>
    )
}

export default Notification;
