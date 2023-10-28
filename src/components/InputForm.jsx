import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import Swal from "sweetalert2";
export const InputForm = () => {
  const [inputData, setInputData] = useState({
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    mobileNo: "",
    emailId: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://softvision-backend.onrender.com/users`, inputData)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Saved Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => console.log(err));
    setInputData({
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
      dob: "",
      mobileNo: "",
      emailId: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="inputForm">
        <label>User Name: </label>
        <input
          type="text"
          placeholder="User Name"
          name="userName"
          value={inputData.userName}
          required
          onChange={handleChange}
        />
        <label>Password: </label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={inputData.password}
          required
          onChange={handleChange}
        />
        <label>First Name: </label>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={inputData.firstName}
          required
          onChange={handleChange}
        />
        <label>Last Name: </label>
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={inputData.lastName}
          required
          onChange={handleChange}
        />
        <label>Date of Birth: </label>
        <input
          type="date"
          placeholder="Date of Birth"
          name="dob"
          value={inputData.dob}
          required
          onChange={handleChange}
        />
        <label>Mobile No: </label>
        <input
          type="text"
          placeholder="Mobile No"
          name="mobileNo"
          value={inputData.mobileNo}
          required
          onChange={handleChange}
        />
        <label>Email: </label>
        <input
          type="email"
          placeholder="Email-Id"
          name="emailId"
          value={inputData.emailId}
          required
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
