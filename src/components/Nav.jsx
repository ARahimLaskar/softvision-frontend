import React from "react";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleNewUser = () => {
    navigate("/newUsers");
  };
  const handleUserList = () => {
    navigate("/list");
  };
  const handleLogin = () => {
    navigate("/");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="navContainer">
      <button onClick={handleNewUser}>New Users</button>
      <button onClick={handleUserList}>Users List</button>
      {token ? (
        <button onClick={handleLogout}> Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};
