import React from "react";

export const UserList = ({ list }) => {
  return (
    <div className="list">
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
