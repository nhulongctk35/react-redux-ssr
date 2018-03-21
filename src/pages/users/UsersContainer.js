import React, { Component } from 'react';
import { connect } from 'react-redux';
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

es6promise.polyfill();

import Users from './Users';

class UsersContainer extends  Component {

  componentWillMount() {
    this.props.dispatch({
      type: 'LOAD_DATA'
    });
  }

  render() {
    const { users } = this.props;

    return <Users data={users} />
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

export default connect(mapStateToProps)(UsersContainer);