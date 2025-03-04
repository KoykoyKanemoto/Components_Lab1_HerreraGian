import React, { useState, useEffect } from 'react';
import EmployeeTable from './components/EmployeeTable';

import { getEmployees } from './api/employeeapi';
import './App.css'; 
function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await getEmployees();
      setEmployees(data);
    };

    fetchEmployees();
  }, []);

  return (
    <div id="root">
        <h1 className='title'>Employee Management System</h1>
        <EmployeeTable employees={employees} />

    </div>
  );
}

export default App;
