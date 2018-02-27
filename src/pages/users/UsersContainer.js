import React, { Component } from 'react';
import { connect } from 'react-redux';

import Users from './Users';

class UsersContainer extends  Component {
  static async getInitialProps({store}) {
    store.dispatch({
      type: 'LOAD_DATA'
    })
  }

  render() {
    const { users } = this.props;

    return <Users data={users} />
  }
}

const mapStateToProps = (state) => {
  return state.users;
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(UsersContainer);