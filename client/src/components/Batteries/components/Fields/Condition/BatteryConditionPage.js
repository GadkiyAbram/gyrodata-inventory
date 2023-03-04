import React, {Component} from 'react';
import BatteryConditionPageView from './BatteryConditionPageView';

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

export default BatteryConditionPage;