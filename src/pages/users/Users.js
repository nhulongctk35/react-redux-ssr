import React, { Component } from 'react';

export default class Users extends Component {
  render() {
    const { data } = this.props;

    const usersView = data.map((user) => (
      <li key={user.id}>{user.name}</li>
    ));

    return (
      <ul>
        {usersView}
      </ul>
    )
  }
}