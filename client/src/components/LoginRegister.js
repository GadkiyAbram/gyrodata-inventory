import React, {Fragment, useState} from 'react';
import './LoginRegister.css';
import Login from './Login/Login';
import Register from './Register/Register';
import PropTypes from 'prop-types';

const LoginRegister = ({setAuth}) => {
  const [addClass, setAddClass] = useState('');

  return (
    <Fragment>
      <div className="loginRegister">
        <div className={`container ${addClass}`} id="container">
          <Login setAuth={setAuth} />
          <Register setAuth={setAuth} />
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <button
                  className="ghost"
                  id="signIn"
                  onClick={() => setAddClass('')}
                >
                    ALREADY WITH US?
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <button
                  className="ghost"
                  id="signUp"
                  onClick={() => setAddClass('right-panel-active')}
                >
                    NEED AN ACCOUNT?
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  );
};

LoginRegister.propTypes = {
  setAuth: PropTypes.func
}

export default LoginRegister;
