'use strict';

import React, {Fragment} from 'react';
import {inject, observer} from 'mobx-react';
import PropTypes from 'prop-types';

const LoginView = ({authStore}) => {
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await authStore.login();
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Fragment>
      <div className="form-container sign-in-container">
        <form onSubmit={onSubmitForm}>
          <h1 className="mt-5 text-center">Login</h1>
          <input
            type="text"
            name="email"
            className="form-control my-3"
            placeholder={'EMAIL'}
            // value={email}
            onChange={e => authStore.setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            className="form-control my-3"
            placeholder={'PASSWORD'}
            // value={password}
            onChange={e => authStore.setPassword(e.target.value)}
          />
          <button
            className="btn btn-success btn-block"
          >
                        LOGIN
          </button>
        </form>
      </div>
    </Fragment>
  );
};

LoginView.propTypes = {
  authStore: PropTypes.object
}

export default inject('authStore')(observer(LoginView));
