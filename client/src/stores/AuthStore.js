'use strict'

import {
  action,
  makeAutoObservable,
  observable,
  runInAction,
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
        setAuth: action,
        setUser: action,
        setEmail: action,
        setPassword: action
      }
    );
  }

  setAuth = (authorized) => {
    this.authorized = authorized;
  }

  setUser = (user) => {
    this.user = user;
  }

  setEmail = (email) => {
    this.email = email;
  }

  setPassword = (password) => {
    this.password = password;
  }

  async login() {
    try {
      const response = await AuthService.login(this.email, this.password);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        this.setPassword('ssss')
        this.setAuth(true);
        this.setUser(response.data);
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  logout() {
    try {
      // const response = await AuthService.logout();
      localStorage.removeItem('token');
      this.setAuth(false);
    } catch (err) {
      console.error(err.message);
    }
  }

  async checkAuthenticated() {
    try {
      const response = await AuthService.checkAuthenticated();

      const parseRes = await response.json();

      parseRes === true ? this.setAuth(true) : this.setAuth(false);
    } catch (err) {
      console.error(err.message);
    }
  }
}

export default AuthStore;