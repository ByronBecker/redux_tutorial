import * as React from 'react'
import * as ReactDOM from 'react-dom'

//Core-js is a Polyfill library 
//Note: to reduce bundle size, import only required features 
/*
import 'core-js/stable'
import 'regenerator-runtime/runtime'
*/

import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { todoApp } from './Reducers';

//Only 1 store in redux
export const store = createStore(todoApp)

ReactDOM.render(
    //Hook up store
    <Provider store={store}>
        <App/> 
    </Provider>,
    document.getElementById('root')
);