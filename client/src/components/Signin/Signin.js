import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input
            className="form-control"
            id="userLoginName"
            placeholder="Enter Username"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Password</label>
          <input
            type="password"
            name="password"
            id="userLoginPassword"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Password"
          />
        </div>
        <div>

        <Link
                className='nav-link float-right naturalWHite'
                to='/guideloc'
              >Guide Signup</Link>
        </div>
      </form>
    </div>
  );
};
export default Signin;
