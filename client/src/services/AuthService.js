import $api from '../http';

export default class AuthService {
    static async login(email, password) {
        return $api.post('/login', {email, password})
            .then(response => response);
    }

    static async register(email, password) {
        return $api.post('/register', {email, password})
            .then(response => response.data);
    }

    static async logout() {
        return $api.post('/logout')
            .then(response => response.data);
    }

    static async checkAuthenticated() {
        return $api.post('/verify').then(response => response);
    }
}