import React, { Component } from 'react';
import {connect} from  'react-redux';
class Users extends Component {

  render() {
      // debugger
      let ulist = this.props.users.map((user, index)=> <li key={index}> User: {user.username} Hometown: {user.hometown} </li> )
    return (
      <div>
        <ul>
            {ulist}
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
