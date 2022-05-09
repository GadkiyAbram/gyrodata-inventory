import React, {Fragment} from 'react';
import {Route} from "react-router-dom";

const LoginFragment = () => {

    return (
        <Fragment>
            <Route
                render={props =>
                    <div className="form-container sign-in-container">
                        <form>
                            <h1 className="mt-5 text-center">Login</h1>
                            <input
                                type="text"
                                name="email"
                                className="form-control my-3"
                                placeholder={'EMAIL'}
                            />
                            <input
                                type="password"
                                name="password"
                                className="form-control my-3"
                                placeholder={'PASSWORD'}
                            />
                            <button className="btn btn-success btn-block">LOGIN</button>
                        </form>
                    </div>
                }
            />
        </Fragment>
    );
};

export default LoginFragment;
