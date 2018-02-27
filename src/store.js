import {createStore, applyMiddleware} from 'redux'
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import createSagaMiddleware, { END } from 'redux-saga'

import rootReducer, {exampleInitialState} from './reducer'
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

export function configureStore (initialState = exampleInitialState) {
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  )

  store.runSaga = saga => sagaMiddleware.run(saga);
  store.injectedReducers = {};
  store.injectedSagas = {};

  store.sagasTaskDone = async (isServer) => {
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

export function withReduxSaga(BaseComponent) {
  return withRedux(configureStore)(nextReduxSaga(BaseComponent))
}
