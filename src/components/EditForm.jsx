import React, { useContext, useState } from "react";
import { MyContext } from "../ContextApi/MyContext";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const EditForm = () => {
  const { editState, setEditState } = useContext(MyContext);

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setEditState({
      ...editState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://softvision-backend.onrender.com/users/${editState.id}`,
        editState
      )
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Edited Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .then((res) => {
        navigate("/list");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit} className="inputForm">
      <input
        type="text"
        placeholder="User Name"
        name="userName"
        value={editState.userName}
        required
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={editState.password}
        required
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={editState.firstName}
        required
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={editState.lastName}
        required
        onChange={handleChange}
      />
      <input
        type="date"
        placeholder="Date of Birth"
        name="dob"
        value={editState.dob}
        required
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Mobile No"
        name="mobileNo"
        value={editState.mobileNo}
        required
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email-Id"
        name="emailId"
        value={editState.emailId}
        required
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
