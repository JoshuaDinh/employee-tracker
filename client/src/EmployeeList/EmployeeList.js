import React, { useState, useEffect } from "react";
import "./employeeList.css";
import axios from "axios";

const EmployeeList = ({ updateDisplay }) => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("/api/employee");
      setEmployees(response.data);
    };
    fetchdata();
  }, [updateDisplay]);

  return (
    <div className="employeeList">
      <div className="header">
        <h1>Employee List:</h1>
      </div>
      <div className="employee-container">
        {employees.map((employee) => {
          return (
            <ul className="employee-card">
              <li>
                Employee Name: <span>{employee.name}</span>
              </li>
              <li>
                Age: <span>{employee.age}</span>
              </li>
              <li>
                Country <span>{employee.country}</span>
              </li>
              <li>
                Position <span>{employee.position}</span>
              </li>
              <li>
                Salary <span>{employee.salary}</span>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default EmployeeList;
