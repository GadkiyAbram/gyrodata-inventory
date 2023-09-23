import React from 'react';
import PropTypes from 'prop-types';

const BatteryInfo = ({serialOne}) => {
  return (
    <div>{serialOne}</div>
  )
}

BatteryInfo.propTypes = {
  serialOne: PropTypes.number
}

export default BatteryInfo;