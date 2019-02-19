import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {

    let users = this.props.users.map((user) => <li>{user.username}</li>)

    return (
      <div>
        { this.props.numberOfUsers } active users:
        <ul>
          { users }
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return { users: state.users, numberOfUsers: state.users.length }
}

export default connect(mapStateToProps) (Users);
