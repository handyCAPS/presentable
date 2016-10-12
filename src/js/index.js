// This is it

import React from 'react';

import { render } from 'react-dom';

import { Provider } from 'react-redux';


import Store from './Store';

import style from '../scss/main.scss';


import App from './App';

import firebase from 'firebase';

import config from './configs/firebase';

firebase.initializeApp(config);


const Presentable = (
    <Provider store={Store}>
        <App />
    </Provider>
    );


render(Presentable, document.getElementById('root'));