import React from 'react';

function EmployeeTable({ employees }) {
  return (
    <div>
      <h2>All Employees</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Salary Level</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>{employee.salary}</td>
              <td>{employee.salary < 50000 ? "Entry Level" : "Senior"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;

