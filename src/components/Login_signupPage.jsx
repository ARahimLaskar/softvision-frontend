import React, { useState, useEffect } from "react";
import "./Login_signupPage.css";

import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login_signupPage = () => {
  const [action, setAction] = useState("Sign Up");
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setInputValues({
      name: "",
      email: "",
      password: "",
      // token:
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    });
  };

  const handleSignup = () => {
    setAction("Sign Up");
    if (inputValues.name && inputValues.email && inputValues.password) {
      console.log(inputValues);
      axios
        .post(`https://softvision-backend.onrender.com/signup`, inputValues)
        .then((res) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Signup Successfull",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => console.log(err));
    }
  };

  const handleLogin = () => {
    setAction("Login");
    console.log(inputValues.email);
    if (inputValues.email && inputValues.password) {
      axios
        .get(`https://softvision-backend.onrender.com/signup`, {
          params: {
            userName: inputValues.name,
            password: inputValues.password,
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            console.log("login token", res.data[0].token);
            localStorage.setItem("token", res.data[0].token);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Login Successfull",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/newUsers");
          }
        });
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <form className="inputs" onSubmit={handleSubmit}>
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <span class="material-symbols-outlined">person</span>
            <input
              type="text"
              placeholder="Enter Name"
              required
              name="name"
              value={inputValues.name}
              onChange={handleInputChange}
            />
          </div>
        )}

        <div className="input">
          <span class="material-symbols-outlined">mail</span>
          <input
            type="email"
            placeholder="Enter Email"
            required
            name="email"
            value={inputValues.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <span class="material-symbols-outlined">lock</span>
          <input
            type="password"
            placeholder="Enter Password"
            required
            name="password"
            value={inputValues.password}
            onChange={handleInputChange}
          />
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Lost Password? <span>click here!</span>
          </div>
        )}

        <div className="submit-container">
          <button
            type="submit"
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={handleSignup}
          >
            Sign Up
          </button>
          <button
            type="submit"
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
