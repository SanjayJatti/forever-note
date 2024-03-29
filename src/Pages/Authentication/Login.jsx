import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { useAuth } from "../../Context/AuthContext";
import {
  AUTH_TOKEN,
  USER_EMAIL,
  USER_PASSWORD
} from "../../Constants/AuthConstants";
import axios from "axios";
import toast from "react-hot-toast"

const Login = () => {
  const { authState, authDispatch } = useAuth();
  const { error } = authState;
  const { email, password } = authState.userInfo;
  const navigate = useNavigate();

  const logInHandler = async (e, emailId, userPassword) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: emailId,
        password: userPassword,
      });
      localStorage.setItem("token", response.data.encodedToken);

      authDispatch({
        type: AUTH_TOKEN,
        payload: response.data.encodedToken,
      });
      navigate("/");      
      toast.success("Logged in");
    } catch (error) {
      toast.error("Invalid email or password")
    }
  };
  return (
    <>
      <div className="log-in-wrapper flex-center">
        <form
          className="form-container"
          onSubmit={(e) => logInHandler(e, email, password)}
        >
          <h1 className="form-title text-primary">Log In</h1>
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
          <div className="flex-column gap-md">
            <button type="submit" className="btn btn-primary btn-long">
              Log In
            </button>
            <button
              className="btn btn-secondary btn-long"
              onClick={(e) =>
                logInHandler(e, "sanjayjattia@gmail.com", "sanjayjatti123")
              }
            >
              Guest Log In
            </button>
          </div>
          <p className="text-medium">
            Don't have an account?
            <Link to="/signup" className=" text-primary">
              Create an account
            </Link>
          </p>
          <h4 className="error-msg">{error}</h4>
        </form>
      </div>
    </>
  );
};

export { Login };
