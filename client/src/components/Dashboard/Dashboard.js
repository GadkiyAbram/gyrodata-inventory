'use strict'

import React, {Component} from 'react';
import BatteryPage from '../Batteries/BatteryPage';
import {inject, observer} from "mobx-react";
import authStore from "../../stores/AuthStore";
import {toJS} from "mobx";
import {Button} from "@material-ui/core";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    logout = () => {
        this.props.authStore.logout();
    }

    render() {
        const {
            logout,
            authorized,
            setAuth
        } = this.props.authStore;

        console.log(authorized);

        return (
            <div>
                <h1>Dashboard</h1>
                <BatteryPage />
                <Button
                    onClick={this.logout}
                >
                    LOGOUT
                </Button>
            </div>
        )
    }

}
export default inject('authStore')(observer(Dashboard));