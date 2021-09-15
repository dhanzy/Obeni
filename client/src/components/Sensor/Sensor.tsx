import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

interface SensorProps {
    children: any;
    once?: boolean;
}

const Sensor: React.FC<SensorProps> = ({children, once=false}): JSX.Element => {
    const [ visible, setVisible ] = React.useState<boolean>(false)
    return (
        <VisibilitySensor
            active={once ? !visible : true}
            onChange={(isVisible) => {
                if (visible && once){
                    return;
                }
                setVisible(isVisible)
            }}
        >
            {children({ isVisible: visible })}
        </VisibilitySensor>
    )
}

export default Sensor;
