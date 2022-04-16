import React from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "../Components/PrivateRoute/PrivateRoute";
import {
  LandingPage,
  Home,
  Labels,
  Archive,
  Trash,
  UserProfile,
  Login,
  Signup,
} from "../Pages/index";
import Mockman from "mockman-js";
const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/labels"
          element={
            <PrivateRoute>
              <Labels />
            </PrivateRoute>
          }
        />
        <Route
          path="/archive"
          element={
            <PrivateRoute>
              <Archive />
            </PrivateRoute>
          }
        />
        <Route
          path="/trash"
          element={
            <PrivateRoute>
              <Trash />
            </PrivateRoute>
          }
        />
        <Route
          path="/userprofile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
        <Route path="/mockman" element={<Mockman/>}/>
      </Routes>
    </>
  );
};
export { PageRoutes };
