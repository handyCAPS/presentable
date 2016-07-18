// This is it

import React from 'react';

import { render } from 'react-dom';

import { Provider } from 'react-redux';


import Store from './Store';

import style from '../scss/main.scss';


import App from './App';


const Presentable = (
    <Provider store={Store}>
        <App />
    </Provider>
    );


render(Presentable, document.getElementById('root'));