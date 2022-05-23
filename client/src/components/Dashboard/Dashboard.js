import React, {Fragment} from 'react';
import BatteryTable from "./BatteryTable";

const Dashboard = ({setAuth}) => {
    return (
        <Fragment>
            <h1>Dashboard</h1>
            <BatteryTable />
            <button
                onClick={() => setAuth(false)}
            >
                LOGOUT
            </button>
        </Fragment>
    )
}

export default Dashboard;