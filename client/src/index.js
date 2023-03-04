import React, {createContext, useContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthStore from './stores/AuthStore';
import {
    BrowserRouter as Router
} from 'react-router-dom'
import {Provider} from 'mobx-react';

const authStore = new AuthStore();

export const AuthContext = createContext({authStore});

// ReactDOM.render(
//   <React.StrictMode>
//       <Router>
//           <AuthContext.Provider value={{authStore}}>
//               <App />
//           </AuthContext.Provider>
//       </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider authStore={new AuthStore()} >
                <App />
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

