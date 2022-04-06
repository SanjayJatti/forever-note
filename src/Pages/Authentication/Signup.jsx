import React from "react";
import { Link } from "react-router-dom";
import {
  USER_FIRST_NAME,
  USER_LAST_NAME,
  USER_EMAIL,
  USER_PASSWORD,
  USER_CONFIRM_PASSWORD,
} from "../../Constants/AuthConstants";
import { useAuth } from "../../Context/AuthContext";
import "./Auth.css";

export const Signup = () => {
  const { authState, authDispatch, signUpHandler } = useAuth();
  const { userInfo, error } = authState;
  const { firstName, lastName, email, password, confirmPassword } = userInfo;
  return (
    <>
      <div className="sign-up-wrapper flex-center">
        <form className="form-container" onSubmit={(e) => signUpHandler(e, firstName, lastName, email, password,confirmPassword)}>
          <h1 className="form-title primary">Sign Up</h1>s
          <div className="input-container">
            <label htmlFor="firstname">First Name*</label>
            <input
              required
              type="text"
              name="firstname"
              id="firstname"
              onChange={(e) =>
                authDispatch({ type: USER_FIRST_NAME, payload: e.target.value })
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor="lastname">Last Name*</label>
            <input
              required
              type="text"
              name="lastname"
              id="lastname"
              onChange={(e) =>
                authDispatch({ type: USER_LAST_NAME, payload: e.target.value })
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email*</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@xyz.com"
              onChange={(e) =>
                authDispatch({ type: USER_EMAIL, payload: e.target.value })
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password*</label>
            <input
              required
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                authDispatch({ type: USER_PASSWORD, payload: e.target.value })
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor="password-confirm">Confirm Password*</label>
            <input
              required
              type="password"
              name="password-confirm"
              id="password-confirm"
              onChange={(e) =>
                authDispatch({
                  type: USER_CONFIRM_PASSWORD,
                  payload: e.target.value,
                })
              }
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
          <h4 className="error-msg">{error}</h4>
        </form>
      </div>
    </>
  );
};
