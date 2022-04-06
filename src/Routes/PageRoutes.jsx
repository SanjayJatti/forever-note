import React from "react";
import { Routes, Route } from "react-router-dom";
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
const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/labels" element={<Labels />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </>
  );
};
export { PageRoutes };
