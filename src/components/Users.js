import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    let users = this.props.users.map(user => <li>{user.username}</li>)
    return (
      <div>
        <h4>User Count: {this.props.userCount}</h4>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}


export default connect(mapStateToProps)(Users);
// export default Users
