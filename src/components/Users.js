import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {
  
  render() {
    return (
      <div>
        <ul>
          {this.props.usersCount} Users!
          {this.props.users.map(u=> <li>{u.username}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, 
          usersCount: state.users.length }
}

export default connect(mapStateToProps)(Users) 
