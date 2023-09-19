import React, {useState} from 'react';
import useStyles from '../../../styles';
import {
    condition,
    conditionColor
} from '../../../../../enums/batteries';

const BatteryConditionPageView = (props) => {
    const classes = useStyles();

    const {
        row,
        updateCondition
    } = props;

    return (
        <div
            className={classes.avatar}
            style={{
                backgroundColor:
                    ((row.condition === condition.NEW && conditionColor.GREEN) || conditionColor.ORANGE)
            }}
        />
        // <div
        //     className={classes.avatar}
        //     style={{
        //         backgroundColor:
        //             ((row.condition === condition.NEW && conditionColor.GREEN) ||
        //                 (row.condition === condition.USED && conditionColor.ORANGE))
        //     }}
        // />
    )
}

export default BatteryConditionPageView;