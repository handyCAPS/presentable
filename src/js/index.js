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
import Inner from './components/Inner';
import Login from './components/Login';


import config from './configs/firebase';

firebase.initializeApp(config);


const Presentable = (
    <Provider store={Store}>
        <Router history={History}>
        	<Route path="/" component={App}>
        		<IndexRoute component={Inner}></IndexRoute>
        		<Route path="login" component={Login}></Route>
        	</Route>
        </Router>
    </Provider>
    );


render(Presentable, document.getElementById('root'));