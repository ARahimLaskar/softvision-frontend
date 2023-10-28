import React from "react";
import { Route, Routes } from "react-router-dom";
import { InputForm } from "../components/InputForm";
import { Login_signupPage } from "./../components/Login_signupPage";
import { UserList } from "../components/UserList";
import { EditForm } from "../components/EditForm";
import { PrivateRoute } from "./PrivateRoute";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login_signupPage />}></Route>
      <Route
        path="/newUsers"
        element={
          <PrivateRoute>
            <InputForm />
          </PrivateRoute>
        }
      ></Route>

      <Route
        path="/list"
        element={
          <PrivateRoute>
            <UserList />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/edit"
        element={
          <PrivateRoute>
            <EditForm />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};
