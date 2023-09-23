import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';

const RegisterView = ({setAuth}) => {

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  });

  const {name, email, password} = inputs;
  const onChange = (event) => {
    setInputs({...inputs, [event.target.name] : event.target.value})
  }

  const onSubmitForm = async (event) => {
    event.preventDefault();

    try {
      const body = {name, email, password};
      console.log(body);
      const response = await fetch(
        'http://localhost:5000/auth/register', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(body)
        }
      );
      const result = await response.json();
      localStorage.setItem('token', result.token);
      setAuth(true);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <Fragment>
      <div className="form-container sign-up-container">
        <form onSubmit={onSubmitForm}>
          <h1>Request Account</h1>
          <input
            type="text"
            name="name"
            className="form-control my-3"
            placeholder={'NAME'}
            value={name}
            onChange={e => onChange(e)}
          />
          <input
            type="text"
            name="email"
            className="form-control my-3"
            placeholder={'EMAIL'}
            value={email}
            onChange={e => onChange(e)}
          />
          <input
            type="password"
            name="password"
            className="form-control my-3"
            placeholder={'PASSWORD'}
            value={password}
            onChange={e => onChange(e)}
          />
          <button
            className="btn btn-success btn-block"
          >
                        REGISTER
          </button>
        </form>
      </div>
    </Fragment>
  );
};

RegisterView.propTypes = {
  setAuth: PropTypes.func
}

export default RegisterView;
