import React, { useState } from 'react';

const workers = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', age: 30 },
    { id: 2, name: 'Jane Smith', position: 'Data Scientist', age: 35 },
    { id: 3, name: 'Michael Johnson', position: 'Web Developer', age: 28 },
    { id: 4, name: 'Emily Williams', position: 'UI/UX Designer', age: 31 },
    { id: 5, name: 'James Brown', position: 'Product Manager', age: 40 },
    { id: 6, name: 'Emma Jones', position: 'Marketing Specialist', age: 27 },
    { id: 7, name: 'William Davis', position: 'Accountant', age: 33 },
    { id: 8, name: 'Olivia Martinez', position: 'HR Manager', age: 36 },
    { id: 9, name: 'Benjamin Anderson', position: 'Graphic Designer', age: 29 },
    { id: 10, name: 'Ava Taylor', position: 'Project Coordinator', age: 32 },
    { id: 11, name: 'Alexander Wilson', position: 'System Administrator', age: 34 },
    { id: 12, name: 'Sophia Thomas', position: 'Content Writer', age: 26 },
    { id: 13, name: 'Daniel White', position: 'Financial Analyst', age: 38 },
    { id: 14, name: 'Mia Garcia', position: 'Quality Assurance Engineer', age: 29 },
    { id: 15, name: 'Matthew Rodriguez', position: 'Business Analyst', age: 33 },
    { id: 16, name: 'Isabella Hernandez', position: 'Customer Support Specialist', age: 28 },
    { id: 17, name: 'Ethan Lopez', position: 'Operations Manager', age: 35 },
    { id: 18, name: 'Amelia Smith', position: 'Sales Representative', age: 30 },
    { id: 19, name: 'Nathan Martin', position: 'Network Engineer', age: 37 },
    { id: 20, name: 'Evelyn Perez', position: 'Event Coordinator', age: 31 },
    { id: 21, name: 'Liam Gonzalez', position: 'Technical Writer', age: 29 },
    { id: 22, name: 'Harper Wilson', position: 'Recruiter', age: 34 },
    { id: 23, name: 'Michael Cooper', position: 'Legal Counsel', age: 39 },
    { id: 24, name: 'Avery Lee', position: 'Procurement Specialist', age: 32 },
    { id: 25, name: 'Logan King', position: 'IT Manager', age: 36 },
    { id: 26, name: 'Scarlett Wright', position: 'Social Media Manager', age: 27 },
    { id: 27, name: 'Lucas Adams', position: 'DevOps Engineer', age: 31 },
    { id: 28, name: 'Madison Baker', position: 'Training Coordinator', age: 33 },
    { id: 29, name: 'Jackson Rivera', position: 'Database Administrator', age: 28 },
    { id: 30, name: 'Luna Torres', position: 'Business Development Manager', age: 35 },
    { id: 31, name: 'Jack Evans', position: 'Technical Support Specialist', age: 29 },
    { id: 32, name: 'Penelope Collins', position: 'UI Designer', age: 34 },
    { id: 33, name: 'Aiden Stewart', position: 'Marketing Manager', age: 37 },
    { id: 34, name: 'Layla Murphy', position: 'System Analyst', age: 31 },
    { id: 35, name: 'Mason Perez', position: 'Customer Success Manager', age: 36 },
    { id: 36, name: 'Zoe Sanchez', position: 'HR Coordinator', age: 28 },
    { id: 37, name: 'Carter Reed', position: 'Product Owner', age: 33 },
    { id: 38, name: 'Grace Turner', position: 'Software Tester', age: 30 },
    { id: 39, name: 'Wyatt Price', position: 'Digital Marketing Specialist', age: 35 },
    { id: 40, name: 'Hannah Butler', position: 'Operations Coordinator', age: 29 },
    { id: 41, name: 'Henry Ward', position: 'Content Manager', age: 34 },
    { id: 42, name: 'Violet Foster', position: 'Sales Manager', age: 37 },
    { id: 43, name: 'Owen Bryant', position: 'UX Designer', age: 31 },
    { id: 44, name: 'Lillian Howard', position: 'Financial Controller', age: 36 },
    { id: 45, name: 'Grayson Russell', position: 'Business Intelligence Analyst', age: 28 },
    { id: 46, name: 'Stella Marshall', position: 'Event Manager', age: 33 },
    { id: 47, name: 'Leo Dixon', position: 'Technical Recruiter', age: 30 },
    { id: 48, name: 'Aurora Hamilton', position: 'Account Manager', age: 35 },
    { id: 49, name: 'Levi Wallace', position: 'IT Support Specialist', age: 29 },
    { id: 50, name: 'Nova Griffin', position: 'Project Manager', age: 34 },
  ];
  

const WorkerList = () => {
  const [displayCount, setDisplayCount] = useState(10);

  const handleDisplayChange = (e) => {
    setDisplayCount(parseInt(e.target.value));
  };

  return (
    <div>
      <h1>Worker List</h1>
      <label>
        Display Count:
        <select value={displayCount} onChange={handleDisplayChange}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
        </select>
      </label>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {workers.slice(0, displayCount).map(worker => (
            <tr key={worker.id}>
              <td>{worker.id}</td>
              <td>{worker.name}</td>
              <td>{worker.position}</td>
              <td>{worker.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkerList;
