import React, {Component, Fragment} from 'react';
import BatteryTable from "./BatteryTable";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            setAuth
        } = this.props;

        return (
            <div>
                <h1>Dashboard</h1>
                <BatteryTable />
                <button
                    onClick={() => setAuth(false)}
                >
                    LOGOUT
                </button>
            </div>
        )
    }

}
export default Dashboard;