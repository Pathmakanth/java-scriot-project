import React from "react";

const Child = ({ name, email, role }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Role:</strong> {role}</p>
    </div>
  );
};

export default Child;