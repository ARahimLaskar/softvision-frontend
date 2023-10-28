import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MyContext } from "../ContextApi/MyContext";

export const UserList = () => {
  const [userData, setUserData] = useState([]);

  const [deleteItem, setDeleteItem] = useState(false);

  const navigate = useNavigate();
  const { editState, setEditState } = useContext(MyContext);

  const handleEdit = (item) => {
    setEditState(item);
    navigate("/edit");
  };

  useEffect(() => {
    axios
      .get(`https://softvision-backend.onrender.com/users`)
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, [deleteItem]);

  const handleDelete = (id) => {
    setDeleteItem(!deleteItem);
    axios
      .delete(`https://softvision-backend.onrender.com/users/${id}`)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Deleted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="userList_container">
      {userData?.map((e, i) => {
        return (
          <div className="userList">
            <div>
              <p>User Name: {e.userName}</p>
              <p>Password: {e.password}</p>
              <p>First Name: {e.firstName}</p>
              <p>Last Name: {e.lastName}</p>
              <p>Date of Birth: {e.dob}</p>
              <p>Mobile No: {e.mobileNo}</p>
              <p>Email-Id: {e.emailId}</p>
            </div>
            <div>
              <span
                id="editBtn"
                onClick={() => handleEdit(e)}
                class="material-symbols-outlined"
              >
                edit
              </span>
              <span
                id="deleteBtn"
                onClick={() => handleDelete(e.id)}
                class="material-symbols-outlined"
              >
                delete
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
