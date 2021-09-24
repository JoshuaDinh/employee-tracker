import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    country: "",
    salary: 0,
  });

  const { fullName, age, salary, country, position } = formData;

  const updateFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <form className="form">
      <h1>Enter Employee Info:</h1>
      <label>Name:</label>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={fullName}
        onChange={(e) => updateFormData(e)}
      />
      <label>Age:</label>
      <input
        type="text"
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
        type="number"
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
      <button onClick={(event) => submit(event)}>Show Employee</button>
    </form>
  );
};

export default Form;
