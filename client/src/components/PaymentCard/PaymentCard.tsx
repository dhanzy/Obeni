import React from 'react';
import { Box, Typography, Tabs, Tab } from '@material-ui/core';
import CreditCard from '../CreditCard/CreditCard';
import PayPal from '../PayPal/PayPal';
import useStyles from './useStyles';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div hidden={value !== index} id={`landing-tab-panel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
}

const PaymentCard = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box p={5} className={classes.paymentInfo}>
            <Typography variant="h4">Payment Info</Typography>
            <Box p={1}>
                <Typography component="p">Payment Method</Typography>
            </Box>
            <Box mt={1}>
                <Tabs
                value={value}
                onChange={handleChange}
                >
                    <Tab label="Credit Card"></Tab>
                    <Tab label="PayPal"></Tab>
                </Tabs>
                <Box>
                    <TabPanel index={0} value={value}>
                        <CreditCard />
                    </TabPanel>
                    <TabPanel index={1} value={value}>
                        <PayPal />
                    </TabPanel>
                </Box>
            </Box>
        </Box>
    )
}

export default PaymentCard;
