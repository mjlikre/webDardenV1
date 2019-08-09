import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Welcome extends Component {
  renderLinks(){
    if(this.props.auth) {
      return(
        <div>
          <Link to='/signout'>Sign out</Link>
          <Link to='/feature'>Feature</Link>
          <Link to='/todo'>Todo</Link>
        </div>
      );
    } else {
      return (
        <div>
         <h1>Welcome to Guide Finder, you can: </h1>
          <Link to='/signup'>Sign up</Link>
          <br/>
          <Link to='/signin'>Sign in</Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <Link to='/'>Redux Auth</Link>
        {this.renderLinks()}
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth: auth.authenticated };
}

export default connect(mapStateToProps, null)(Welcome);