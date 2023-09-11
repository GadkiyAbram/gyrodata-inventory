import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthStore from './stores/AuthStore';
import {
    BrowserRouter as Router
} from 'react-router-dom'
import {Provider} from 'mobx-react';

const authStore = new AuthStore();

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

