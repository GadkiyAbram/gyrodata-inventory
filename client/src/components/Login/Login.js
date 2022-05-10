import React, {Component} from 'react';
import LoginView from "./LoginView";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            setAuth
        } = this.props;

        return (
            <LoginView
                setAuth={setAuth}
            />
        );
    }
};

export default Login;
