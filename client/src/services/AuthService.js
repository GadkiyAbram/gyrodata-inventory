import $api from '../http';

export default class AuthService {
    static async login(email, password) {
        console.log('login called');
        return $api.post('/login', {email, password})
            .then(response => response);
    }

    static async register(email, password) {
        return $api.post('/register', {email, password})
            .then(response => response.data);
    }

    static async logout() {
        console.log('logout');
        return $api.post('/logout')
            .then(response => response.data);
    }
}