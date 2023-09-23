import React from 'react';
import {Button} from '@material-ui/core';
import PropTypes from 'prop-types';
import Table from '../shread/DataDisplay/Table/Table';
import columns from '../Batteries/columns';

const BatteryPageView = (props) => {
  const {
    batteryData,
    getData,
    limit,
    setOffset,
    total,
    updateCondition
  } = props;

  const setNewOffset = (event) => {
    const newOffset = (event.selected * limit) % total;
    setOffset(newOffset);
  }

  return (
    <div>
      <Button
        onClick={getData}>
        See All Batteries
      </Button>
      <Table
        columns={columns}
        data={batteryData}
        limit={limit}
        setOffset={setNewOffset}
        withPagination={true}
      />
    </div>
  )
}

BatteryPageView.propTypes = {
  batteryData: PropTypes.array,
  getData: PropTypes.func,
  limit: PropTypes.number,
  setOffset: PropTypes.func,
  total: PropTypes.number,
  updateCondition: PropTypes.func
}

export default BatteryPageView;