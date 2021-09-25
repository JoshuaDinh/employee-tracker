import React, { useState } from "react";
import "./app.css";
import EmployeeList from "./EmployeeList/EmployeeList";
import Form from "./Form/Form";

const App = () => {
  const [updateDisplay, setUpdateDisplay] = useState(false);
  return (
    <div className="App">
      <Form update={() => setUpdateDisplay(!updateDisplay)} />
      <EmployeeList updateDisplay={updateDisplay} />
    </div>
  );
};

export default App;
