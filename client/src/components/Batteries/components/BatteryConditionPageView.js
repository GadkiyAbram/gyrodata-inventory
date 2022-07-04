import React, {useState} from 'react';
import useStyles from '../styles';

const BatteryConditionPageView = (props) => {
    const classes = useStyles();

    const {
        row,
        updateCondition
    } = props;

    const [currentCondition, setCurrentCondition] = useState(row.condition);

    const handleCondition = (id) => {
        console.log(currentCondition);
        setCurrentCondition((prevCondition) => Number(!prevCondition));
        console.log(currentCondition);
        updateCondition(id, currentCondition);
    }

    return (
        <>
            <div
                className={classes.avatar}
                style={{
                    backgroundColor:
                        ((currentCondition === 1 && 'green') ||
                            (currentCondition === 0 && 'orange'))
                }}
                onClick={() => handleCondition(row.id)}
            />
        </>
    )
}

export default BatteryConditionPageView;