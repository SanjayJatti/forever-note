import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthReducer } from "../Reducer/AuthReducer.js";
import { IS_USER_LOGGED_IN, AUTH_ERROR } from "../Constants/AuthConstants";

const authContext = createContext();

const authToken = localStorage.getItem("token");
const istoken = authToken ? true : false;

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [authState, authDispatch] = useReducer(AuthReducer, {
    userInfo: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    isUserLoggedIn: istoken,
    error: "",
    token: authToken,
  });
  const { firstName, lastName, email, password, confirmPassword } =
    authState.userInfo;

  const signUpHandler = async (
    e,
    firstname,
    lastname,
    emailId,
    userPassword,
    userConfirmPassword
  ) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: firstname,
        lastName: lastname,
        email: emailId,
        password: userPassword,
        confirmPassword: userConfirmPassword,
      });
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({
        type: IS_USER_LOGGED_IN,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
      authDispatch({
        type: AUTH_ERROR,
        payload: "Sign up failed",
      });
    }
  };

  const logInHandler = async (e, emailId, userPassword) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: emailId,
        password: userPassword,
      });
      localStorage.setItem("token", response.data.encodedToken);

      authDispatch({
        type: IS_USER_LOGGED_IN,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      authDispatch({
        type: AUTH_ERROR,
        payload: "Invalid email or password",
      });
    }
  };

  const logOutHandler = () => {
    localStorage.removeItem("token");
    authDispatch({
      type: IS_USER_LOGGED_IN,
    });
    navigate("/");
  };
console.log(authState.isUserLoggedIn)
  return (
    <authContext.Provider
      value={{
        authState,
        authDispatch,
        signUpHandler,
        logInHandler,
        logOutHandler,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
