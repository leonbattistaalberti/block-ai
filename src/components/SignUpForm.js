import React from "react";
import "./SignUpForm.css";

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
            <span>Validate</span>
          </button>
          <p>
            Already have an account? <span>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignUpForm;
