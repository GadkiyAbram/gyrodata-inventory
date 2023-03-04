'use strict'

import {
    action,
    decorate, makeAutoObservable, makeObservable,
    observable, runInAction,
    toJS
} from 'mobx';
import AuthService from '../services/AuthService';

class AuthStore {
    authorized = false;
    user = {};
    email = '';
    password = '';

    constructor() {
        makeAutoObservable(this,
            {
            authorized: observable,
            user: observable,
            email: observable,
            password: observable,
            setAuth: action.bound,
            setUser: action,
            setEmail: action,
            setPassword: action
        }
        );
    }

    setAuth = (authorized) => {
        this.authorized = authorized;
        console.log(this.authorized);
    }

    setUser = (user) => {
        console.log(user);
        this.user = user;
    }

    setEmail = (email) => {
        console.log(toJS(email))
        this.email = email;
    }

    setPassword = (password) => {
        this.password = password;
    }

    async login() {
        console.log('login called');
        try {
            // console.log(this.email, this.password);
            console.log('alex-abram@bk.ru', 'admin');
            const response = await AuthService.login('alex-abram@bk.ru', 'admin');

            console.log(toJS(response));

            if (response.data.token) {

                console.log(response.data);
                localStorage.setItem('token', response.data.token);
                runInAction(() => {
                    this.authorized = true;
                });
                this.setUser(response.data);
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    logout() {
        console.log('logout called');
        try {
            // const response = await AuthService.logout();
            localStorage.removeItem('token');
            // this.setPassword('asfasf');
            // console.log(this.password);

            this.setAuth(false);
        } catch (err) {
            console.error(err.message);
        }
    }

    // async login() {
    //     try {
    //         const response = (await fetch(
    //             'http://localhost:5000/auth/login',
    //             {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-type': 'application/json'
    //                 },
    //                 body: JSON.stringify({
    //                     email: this.email,
    //                     password: this.password
    //                 })
    //             }
    //         )).json();
    //         if (response.token) {
    //             localStorage.setItem('token', response.token);
    //             this.setUser(response)
    //             this.setAuth(true);
    //         } else {
    //             this.setAuth(false);
    //         }
    //     } catch (err) {
    //         console.error(err.message);
    //     }
    // }
}

export default AuthStore;