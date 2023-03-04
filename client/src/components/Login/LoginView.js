import React,
{
    Fragment, useContext,
    useState
} from 'react';
import {inject, observer} from "mobx-react";
import {AuthContext} from "../../index";

const LoginView = ({authStore}) => {

    // const {authStore} = useContext(AuthContext);
    //
    // const [inputs, setInputs] = useState({
    //     email: '',
    //     password: ''
    // });

        // const {email, password} = inputs;
        // const onChange = (event) => {
        //     setInputs({...inputs, [event.target.name] : event.target.value})
        // }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            await authStore.login();

            // const body = { email, password };
            // const response = await fetch(
            //     'http://localhost:5000/auth/login',
            //     {
            //         method: 'POST',
            //         headers: {
            //             'Content-type': 'application/json'
            //         },
            //         body: JSON.stringify(body)
            //     }
            // );

            // const result = await response.json();

            // console.log(await result.data.token);
            // if (result.data.token) {
            //     localStorage.setItem('token', result.data.token);
            //     authStore.setAuth(true);
            // } else {
            //     authStore.setAuth(false);
            // }
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

export default inject('authStore')(observer(LoginView));
