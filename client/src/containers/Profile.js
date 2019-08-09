import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import requireAuth from "../hoc/requireAuth";
class Profile extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    console.log("Counters props", this.props);
    return (
      <div>
        <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
          <h4 id="fat">
            <div className="jumbotron mt-3 bg-white pl-3 ml-3 mr-3 pt-3 pb-3 mb-5">
              <div>
                <img
                  src= {this.props.photoLink}
                  alt={this.props.name}
                  className="rounded float-right col-md-4 border-secondary"
                />
                <p>
                  <strong>Name: {this.props.userName}</strong>
                </p>
                <p>
                  <strong>Email: {this.props.email}</strong>
                </p>
                <p>
                  <strong>Age: {this.props.age} </strong>
                </p>
                <p>
                  <strong>
                    Years of experience: {this.props.yearsOfExperience}
                  </strong>
                </p>
                <p>
                  <strong>Activities:{this.props.activities} </strong>
                </p>
                <p>
                  <strong>City: {this.props.city}</strong>
                </p>
                <p>
                  <strong>About Me: {this.props.aboutMe}</strong>
                </p>
              </div>
              <br />
              <div>
                <Button variant="primary" size="lg" to="#" block>
                  Chat
                </Button>
                <Button variant="secondary" size="lg" block to="#">
                  Edit Profile
                </Button>
              </div>
            </div>
          </h4>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ user }) {
  return {
    userName: user.userName,
    email: user.email,
    age: user.age,
    yearsOfExperience: user.yearsOfExperience,
    activities: user.activities,
    city: user.city,
    photoLink: user.photoLink,
    aboutMe: user.aboutMe

  };
}
export default requireAuth(
  connect(
    mapStateToProps,
    { fetchUser }
  )(Profile)
);
