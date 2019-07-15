import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    let usersList = this.props.users.map((user) => <li key={user.toString()}>{user.username}</li>)
      return (
        <div>
          <p>{this.props.users.length}</p>

          <ul>
            {usersList}
          </ul>
        </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Users);
