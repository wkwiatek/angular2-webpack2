const Redux = require('redux');
const ReduxLogger = require('redux-logger');
const Immutable = require('immutable');

const createStore = Redux.createStore;
const applyMiddleware = Redux.applyMiddleware;

const List = Immutable.List;

import {Injectable} from 'angular2/core';
import {Reducers} from './Reducers';
import {ReduxStore} from './ReduxStore';

const logger = ReduxLogger();

let store;

if (NODE_ENV === 'production') {
  store = createStore(Reducers, {
    todos: List([])
  });
} else {
  const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
  store = createStoreWithMiddleware(Reducers, {
    todos: List([])
  });
}


export class Store extends ReduxStore {
  constructor() {
    super(store);
  }
}
