import React from "react";
import "./SignUpForm.css";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div className="signupForm">
      <div className="signupForm__container">
        <h2>Create an account</h2>

        <div className="signupForm__form">
          <p> Full Name</p>
          <input type="text" placeholder="Full Name" />
          <p> Email</p>
          <input type="text" placeholder="Email" />
          <p> Password</p>
          <input type="text" placeholder="Password" />
          <button className="signupForm__validate">
            <Link to="/home">Validate</Link>
          </button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignUpForm;
