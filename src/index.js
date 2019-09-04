import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import store from './redux/store';

ReactDOM.render(
    // provider grants access to store object from redux for entire app
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,

document.getElementById('root'));


