'use strict'

import React, {Fragment, useEffect} from 'react';
import LoginRegister from './components/LoginRegister';
import {
  Navigate,
  Route,
  Routes,
  useNavigate
} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import {inject, observer} from 'mobx-react';
import PropTypes from 'prop-types';

const App = ({authStore}) => {
  const navigate = useNavigate();

  const {
    authorized,
    setAuth
  } = authStore;

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      setAuth(false);
      navigate('/login')
    } else {
      setAuth(true);
      navigate('/dashboard')
    }
    // checkAuthenticated();
  }, [authStore]);

  return (
    <Fragment>
      <Routes>
        <Route
          index element={<LoginRegister />}
        />
        <Route
          exact path='/login'
          element={authorized ? <Dashboard /> : <LoginRegister />}
        />
        <Route
          exact path='/dashboard'
          element={authorized ? <Dashboard /> : <Navigate to={'/login'} />}
        />
      </Routes>
    </Fragment>
  );
};

App.propTypes = {
  authStore: PropTypes.object
}

export default inject('authStore')(observer(App));
