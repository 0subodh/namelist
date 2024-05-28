import React, { useState } from "react";
import { Display } from "./Display";

export const Form = ({ addUser }) => {
  const [name, setName] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addUser(name);
  };

  return (
    <div className="form">
      <Display name={name} />
      <form action="" onSubmit={handleOnSubmit}>
        <input type="text" onChange={handleOnChange} />
        <button>Add User</button>
      </form>
    </div>
  );
};
