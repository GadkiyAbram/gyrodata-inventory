import React, {Component, Fragment} from 'react';
import BatteryPage from '../Batteries/BatteryPage';

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
                <BatteryPage />
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