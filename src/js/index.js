// This is it

import React from 'react';

import { render } from 'react-dom';

import { Provider } from 'react-redux';

import firebase from 'firebase';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import Store, { History } from './Store';

import style from '../scss/main.scss';


import App from './App';

import Root from './components/Root';
import Main from './components/Main';
import Login from './components/Login';


import config from './configs/firebase';

firebase.initializeApp(config);


let isLoggedIn = true;

const Presentable = (
    <Provider store={Store}>
        <Router history={History}>
        	<Route path="/" component={App}>
        		{isLoggedIn && <IndexRoute component={Main}></IndexRoute>}
        		{!isLoggedIn && <IndexRoute component={Login}></IndexRoute>}
        		<Route path="login" component={Login}></Route>
        	</Route>
        </Router>
    </Provider>
    );


render(Presentable, document.getElementById('root'));