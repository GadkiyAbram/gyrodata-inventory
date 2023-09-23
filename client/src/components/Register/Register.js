import React, {Component} from 'react';
import RegisterView from './RegisterView';
import PropTypes from 'prop-types';

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

Register.propTypes = {
  setAuth: PropTypes.func
}

export default Register;
