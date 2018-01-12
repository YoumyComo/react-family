// import {createStore,applyMiddleware} from 'redux';
// import combineReducers from './reducers.js';
// import thunkMiddleware from 'redux-thunk';

// let store = createStore(combineReducers,applyMiddleware(thunkMiddleware));

// export default store;

/* 对上述代码修改，应用middleware */

import {createStore,applyMiddleware} from 'redux';
import combineReducers from './reducers.js';

import promiseMiddleware from './middleware/promiseMiddleware';

let store = createStore(combineReducers, applyMiddleware(promiseMiddleware));



export default store;