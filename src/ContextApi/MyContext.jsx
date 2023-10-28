import React, { createContext, useState } from "react";

export const MyContext = createContext();

function MyContextProvider({ children }) {
  const [editState, setEditState] = useState({
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    mobileNo: "",
    emailId: "",
  });

  return (
    <MyContext.Provider value={{ editState, setEditState }}>
      {children}
    </MyContext.Provider>
  );
}
export default MyContextProvider;
