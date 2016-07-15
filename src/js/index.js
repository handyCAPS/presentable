// This is it

import React from 'react';

import { render } from 'react-dom';

import Provider from 'react-redux';


import Store from './Store';

import style from '../scss/main.scss';

import Main from './components/Main';


const MyApp = (
    <Provider store={Store}>
        <Main></Main>
    </Provider>
    );


render(<MyApp />, document.getElementById('root'));