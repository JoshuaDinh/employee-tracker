import React, { useState } from "react";
import "./form.css";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: null,
    country: "",
    salary: null,
    position: "",
  });

  const { fullName, age, salary, country, position } = formData;

  const updateFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ fullName, age, salary, country, position });

  const submit = async (event) => {
    event.preventDefault();
    axios.post("/api/addEmployee", body, config);
    setFormData({
      fullName: "",
      age: "",
      country: "",
      salary: "",
      position: "",
    });
  };

  return (
    <form className="form">
      <h1>Enter Employee Info:</h1>
      <label>Name:</label>
      <input
        type="text"
        placeholder="Name"
        name="fullName"
        value={fullName}
        onChange={(e) => updateFormData(e)}
      />
      <label>Age:</label>
      <input
        type="number"
        placeholder="Age"
        name="age"
        value={age}
        onChange={(e) => updateFormData(e)}
      />
      <label>Country:</label>
      <input
        type="text"
        placeholder="Country"
        name="country"
        value={country}
        onChange={(e) => updateFormData(e)}
      />
      <label>Position:</label>
      <input
        type="text"
        placeholder="Position"
        name="position"
        value={position}
        onChange={(e) => updateFormData(e)}
      />
      <label>Salary:</label>
      <input
        type="number"
        placeholder="Salary"
        name="salary"
        value={salary}
        onChange={(e) => updateFormData(e)}
      />
      <button onClick={(event) => submit(event)}>Submit Employee</button>
    </form>
  );
};

export default Form;
