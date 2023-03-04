'use strict'

import React, {Fragment, useContext, useEffect, useState} from 'react';
import LoginRegister from './components/LoginRegister';
import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes, useNavigate, redirect
} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import {AuthContext} from './index';
import {inject, observer} from "mobx-react";

const App = ({authStore}) => {
    const navigate = useNavigate();

    // const {authStore} = useContext(AuthContext);

    console.log(`APP: ${authStore.authorized}`);

    const checkAuthenticated = async () => {
        try {
            const res = await fetch('http://localhost:5000/auth/verify', {
                method: 'POST',
                headers: {'token': localStorage.token}
            });

            const parseRes = await res.json();

            parseRes === true ? authStore.setAuth(true) : authStore.setAuth(false);
        } catch (err) {
            console.error(err.message);
        }
    };

    // const redirectD = (authorized) => {
    //   if (!authorized) {
    //       return <LoginRegister setAuth={authStore.setAuth}/>
    //   } else {
    //       return <Navigate to={{pathname: '/dashboard'}} />
    //   }
    // };
    //
    // const redirectL = (authorized) => {
    //     if (authorized) {
    //         return <Dashboard setAuth={authStore.setAuth} logout={authStore.logout} />
    //     } else {
    //         return <Navigate to={'/'} />
    //     }
    // };

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            authStore.setAuth(false);
            navigate('/login')
        } else {
            authStore.setAuth(true);
            navigate('/dashboard')
        }
        // checkAuthenticated();
    }, [authStore]);

    return (
        <Fragment>
            <Routes>
                <Route
                    index element={<LoginRegister/>}
                />
                <Route
                    exact path='/login'
                    element={authStore.authorized ? <Dashboard /> : <LoginRegister />}
                />
                <Route
                    exact
                    path='/dashboard'
                    element={authStore.authorized ? <Dashboard /> : <Navigate to={'/login'} />}
                />
            </Routes>
        </Fragment>
    );
};

export default inject('authStore')(observer(App));
