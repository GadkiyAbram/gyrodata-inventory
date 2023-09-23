import React, {Component} from 'react';
import {observer} from 'mobx-react';
import batteryStore from '../../stores/BatteryStore';
import BatteryPageView from './BatteryPageView';

class BatteryPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      batteries,
      getBatteryData,
      limit,
      setOffset,
      total,
      updateCondition
    } = batteryStore;

    return (
      <BatteryPageView
        batteryData={batteries}
        getData={getBatteryData}
        updateCondition={updateCondition}
        setOffset={setOffset}
        limit={limit}
        total={total}
      />
    )
  }
}

export default observer(BatteryPage);