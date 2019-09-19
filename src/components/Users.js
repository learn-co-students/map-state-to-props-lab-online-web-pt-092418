import React, { Component } from 'react';
import {connect} from  'react-redux';
class Users extends Component {

  render() {
      // debugger
    return (
      <div>
        <ul>
            {this.props.users.map(user=> {
                return <li> User: {user.username} Hometown: {user.hometown} </li>
            })}
            {this.props.users.length}
        </ul>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {users: state.users, usersCount: state.users.length}
};


export default connect(mapStateToProps)(Users);
