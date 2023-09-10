import React, {createContext, useContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthStore from './stores/AuthStore';
import {
    BrowserRouter as Router
} from 'react-router-dom'
import {Provider, MobXProviderContext} from 'mobx-react';

const authStore = new AuthStore();

console.log(authStore);

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider authStore={authStore} >
                <App />
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

