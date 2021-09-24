import React from "react";
import "./app.css";
import EmployeeList from "./EmployeeList/EmployeeList";
import Form from "./Form/Form";

const App = () => {
  return (
    <div className="App">
      <Form />
      <EmployeeList />
    </div>
  );
};

export default App;
