import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import NavBar from '../components/navbar';
import Routes from '../helper/routes';
import { getStudents } from '../helper/data/studentData';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((response) => setStudents(response));
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Routes students={students} setStudents={setStudents}/>
      </Router>
    </>
  );
}

export default App;
