import { combineReducers } from 'redux';
import { isPlainObject, forEach } from 'lodash';

function syncReducers(store) {
  store.replaceReducer(combineReducers({...store.injectedReducers}));
}

export function injectReducer(store, name, asyncReducer) {
  if (store.injectedReducers[name]) {
    return;
  }

  store.injectedReducers[name] = asyncReducer;
  syncReducers(store);
}

export function injectReducers(store, reducers) {
  if (reducers && isPlainObject(reducers)) {
    forEach(reducers, (reducer, name) => {
      injectReducer(store, name, reducer);
    })
  }
}