import React from 'react';
import ReactDOM from 'react-dom';

import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "./redux/reducers/rootReducer";

import {Provider} from "react-redux";
import './sass/main.scss';
import './css/main.css';
import "bootstrap/dist/css/bootstrap.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
);

