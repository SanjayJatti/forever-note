import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export const Signup = () => {
  return (
    <>
      <div className="sign-up-wrapper flex-center">
        <form className="form-container">
          <h1 className="form-title primary">Sign Up</h1>s
          <div className="input-container">
            <label htmlFor="firstname">First Name*</label>
            <input required type="text" name="firstname" id="firstname" />
          </div>
          <div className="input-container">
            <label htmlFor="lastname">Last Name*</label>
            <input required type="text" name="lastname" id="lastname" />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email*</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@xyz.com"
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password*</label>
            <input required type="password" name="password" id="password" />
          </div>
          <div className="input-container">
            <label htmlFor="password-confirm">Confirm Password*</label>
            <input
              required
              type="password"
              name="password-confirm"
              id="password-confirm"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create New Account
          </button>
          <p className="text-medium">
            Have an account?{" "}
            <span>
              <Link to="/login" className="text-medium text-primary">
                LogIn
              </Link>
            </span>
          </p>
        </form>
      </div>
    </>
  );
};
