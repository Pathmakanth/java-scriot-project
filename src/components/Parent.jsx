import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <div className="container">
      <h1>Employee Details</h1>

      <Child name="Padmakanth" email="padmakanth@gmail.com" role="React Learner" />
      <Child name="Ravi Kumar" email="ravi@gmail.com" role="Frontend Developer" />
      <Child name="Meena Sharma" email="meena@gmail.com" role="UI Designer" />
      <Child name="Arun Singh" email="arun@gmail.com" role="Backend Developer" />
      <Child name="Priya Das" email="priya@gmail.com" role="Project Manager" />

    </div>
  );
};

export default Parent;