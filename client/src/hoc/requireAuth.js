import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount(){
      this.shouldNavigateAway();
    }

    componentDidUpdate(){
      this.shouldNavigateAway();
    }

    shouldNavigateAway(){
      if(!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props}/>;
    }
  }

  function mapStateToProps({ auth, guideAuth}) {
    return { auth: auth.authenticated};
  }
  return connect(mapStateToProps, null)(ComposedComponent);
}