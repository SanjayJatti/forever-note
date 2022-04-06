import React from "react";
import { Header } from "../../Components/Header/Header.jsx"
import { Link } from "react-router-dom";
import "./Auth.css"

export const Login = () => {
  return (
    <>
    <Header/>
    <div className="log-in-wrapper flex-center">
        <form className="form-container">
          <h1 className="form-title primary">Log In</h1>
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
            <input
              required
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div className="forget-password flex-row">
            <div className="input-checkbox">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                value="remember-me"
              />
              <label className="text-medium" htmlFor="remember-me">
                Remember me
              </label>
            </div>
            <Link to="/login"className="text-medium text-primary">
              {" "}
              Forget your password?
            </Link>
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
          <button className="btn btn-secondary">
            Guest LogIn
          </button>
          <p className="text-medium">
            Don't have an account?
            <Link to="/signup" className="text-medium text-primary">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </>
  )
}
