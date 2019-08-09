import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signin, fetchUser } from "../actions";
import { Link, Redirect } from "react-router-dom";
import UserDestination from '../components/UserDestination'
import Home from '../containers/Home'

import "font-awesome/css/font-awesome.min.css";
import "./style.css";

class Signin extends Component {
  onSubmit = formValues => {
    this.props.signin(formValues, () => {
      this.props.history.push("/profile");
    });
    this.stateManage= 1

  };


  // componentDidMount() {
  //   this.props.fetchUser();
  //   if(this.props.user.user) {
  //     this.props.history.push("/profile");
  //   }
  // }

  renderInput = ({ input, type }) => {
    return <input type={type} {...input} />;
  };

  stateManage = 0



  render() {
    const { handleSubmit } = this.props;
    console.log(this.props.user);
    // if (this.props.user === undefined){
      return (
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-5 mx-auto">
                <div id="first">
                  <div className="myform form ">
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                      <fieldset className="my-fieldset">
                        <label>Email</label>
                        <Field
                            name="email"
                            type="text"
                            label="Email"
                            component={this.renderInput}
                            autoComplete="none"
                            className="form-control"
                            aria-describedby="emailHelp"
                        />
                      </fieldset>
                      <fieldset>
                        <label>Password</label>
                        <Field
                            name="password"
                            type="password"
                            label="password"
                            component={this.renderInput}
                            autoComplete="none"
                        />
                      </fieldset>
                      <button className="btn btn-block tx-tfm navyBlue text-white">
                        {" "}
                        <i className="fa fa-sign-in" aria-hidden="true" />
                        Signin
                      </button>
                      <div>{this.props.errorMessage}</div>
                      <br />
                      <div className="col-md-12 text-center ">
                        <button className="btn btn-block tx-tfm navyBlue text-white">
                          <Link
                              className="nav-link float-left naturalWHite"
                              to="/guideloc"
                          >
                            <i className="fa fa-paper-plane" aria-hidden="true" />
                            Sign Up As a Guide
                          </Link>
                        </button>
                        <button className="btn btn-block tx-tfm navyBlue text-white">
                          <Link
                              className="nav-link float-left naturalWHite"
                              to="/usersignup"
                          >
                            <i className="fa fa-paper-plane" aria-hidden="true" />
                            Sign Up As a User
                          </Link>
                        </button>

                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );

  }
}
function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage,
    authenticated: state.auth.authenticated,
    user: state.fetchU
  };
}
export default compose(
  connect(
    mapStateToProps,
    { signin, fetchUser }
  ),
  reduxForm({ form: "signin" })
)(Signin);

