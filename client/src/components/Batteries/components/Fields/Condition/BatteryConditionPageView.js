import React, {useState} from 'react';
import useStyles from '../../../styles';
import {
  condition,
  conditionColor
} from '../../../../../enums/batteries';
import PropTypes from 'prop-types';

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
        backgroundColor: (
          (
            row.condition === condition.NEW &&
            conditionColor.GREEN
          ) ||
          conditionColor.ORANGE
        )
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

BatteryConditionPageView.propTypes = {
  row: PropTypes.object,
  updateCondition: PropTypes.func
}

export default BatteryConditionPageView;