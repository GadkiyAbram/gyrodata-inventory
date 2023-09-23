import React, {Component} from 'react';
import BatteryConditionPageView from './BatteryConditionPageView';
import PropTypes from 'prop-types';

class BatteryConditionPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      row,
      updateCondition
    } = this.props;

    return (
      <BatteryConditionPageView row={row} updateCondition={updateCondition} />
    )
  }
}

BatteryConditionPage.propTypes = {
  row: PropTypes.object,
  updateCondition: PropTypes.func
}

export default BatteryConditionPage;