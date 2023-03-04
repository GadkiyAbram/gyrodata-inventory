import React, {useState} from 'react';
import useStyles from '../../../styles';
import {condition} from '../../../../../enums/batteries';

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
                    ((row.condition === condition.NEW && 'green') ||
                        (row.condition === condition.USED && 'orange'))
            }}
        />
    )
}

export default BatteryConditionPageView;