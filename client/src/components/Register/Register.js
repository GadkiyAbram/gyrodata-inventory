import React, {Component} from 'react';
import RegisterView from './RegisterView';

class Register extends Component {

    render() {
        const {
            setAuth
        } = this.props;

        return (
            <RegisterView
                setAuth={setAuth}
            />
        );
    }
};

export default Register;
