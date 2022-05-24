import React, {Fragment, useEffect, useState} from 'react';
import LoginRegister from './components/LoginRegister';
import {
    Redirect,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const setAuth = (boolean) => {
        setIsAuthenticated(boolean);
    }

    const checkAuthenticated = async () => {
        try {
            const res = await fetch('http://localhost:5000/auth/verify', {
                method: 'POST',
                headers: {'token': localStorage.token}
            });

            const parseRes = await res.json();

            parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
            console.log(parseRes);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        checkAuthenticated();
    }, []);

      return (
          <Fragment>
              <Router>
                  <Route
                      exact
                      path='/'
                      render={props => !isAuthenticated ? (
                          <LoginRegister setAuth={setAuth}/>
                      ) : (<Redirect to='/dashboard' />)
                      }
                  />
                  <Route
                      exact
                      path='/dashboard'
                      render={props => isAuthenticated ? (
                          <Dashboard setAuth={setAuth} />
                      ) : (<Redirect to='/' />)
                      }
                  />
              </Router>
          </Fragment>
      );
}

export default App;
