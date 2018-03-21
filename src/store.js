import React from 'react';
import {createStore, applyMiddleware} from 'redux'
import withRedux from 'next-redux-wrapper'
import createSagaMiddleware, { END } from 'redux-saga'

import rootReducer from './reducer'
import rootSaga from './saga'

import {injectReducers} from './components/Injector';
import { injectSagas } from './components/Injector';

const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export function configureStore (initialState = {}) {
  const store = createStore(
    (state = {}) => state,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  store.runSaga = saga => sagaMiddleware.run(saga);
  store.injectedReducers = {};
  store.injectedSagas = {};

  store.sagaTasksDone = async (isServer) => {
    if (isServer) {
      store.dispatch(END);
    }

    for (let saga of Object.values(store.injectedSagas)) {
      await saga.sagaTask;
    }
  }

  injectReducers(store, rootReducer);
  injectSagas(store, rootSaga);
  return store
}

function withReduxSagaWrapper(BaseComponent) {
  class WrappedComponent extends React.Component {

    static async getInitialProps(ctx) {
      const { isServer, store } = ctx;

      let props;
      if (BaseComponent.getInitialProps) {
        props = await BaseComponent.getInitialProps(ctx);
      }

      if (isServer) {
        await store.sagaTasksDone(isServer);
      }
      return props;
    }

    render() {
      return <BaseComponent {...this.props} />
    }
  }

  return WrappedComponent;
}

export function withReduxSaga(BaseComponent) {
  return withRedux(configureStore)(withReduxSagaWrapper(BaseComponent))
}
