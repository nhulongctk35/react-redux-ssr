import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {withReduxSaga} from "../../store";
import { injectReducers } from './injectReducers';
import { injectSagas } from './injectSagas';

export function injector(injectors = {}, BaseComponent) {
  class WrappedComponent extends Component {

    static async getInitialProps(ctx) {
      const {store} = ctx;
      injectReducers(store, injectors.reducers);
      injectSagas(store, injectors.sagas);
      if (BaseComponent.getInitialProps) {
        await BaseComponent.getInitialProps(ctx);
      }
    }

    componentWillMount() {
      injectReducers(this.context.store, injectors.reducers);
      injectSagas(this.context.store, injectors.sagas);
    }

    render() {
      return <BaseComponent {...this.props} />
    }
  }

  WrappedComponent.contextTypes = { store: PropTypes.object };
  return withReduxSaga(WrappedComponent);
}