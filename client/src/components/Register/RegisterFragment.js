import React, {Fragment} from 'react';
import {Route} from "react-router-dom";

const RegisterFragment = () => {

    return (
        <Fragment>
            <Route
                render={props =>
                    <div className="form-container sign-up-container">
                        <form>
                            <h1>Request Account</h1>
                            <input
                                type="text"
                                name="name"
                                className="form-control my-3"
                                placeholder={'NAME'}
                            />
                            <input
                                type="email"
                                name="email"
                                className="form-control my-3"
                                placeholder={'EMAIL'}
                            />
                            <button className="btn btn-success btn-block">REGISTER</button>
                        </form>
                    </div>
                }
            />
        </Fragment>
    );
};

export default RegisterFragment;
