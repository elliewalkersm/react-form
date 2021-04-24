import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import firebaseConfig from '../helper/data/apiKeys';
import './App.scss';
import StudentForm from '../studentForm';
import { getStudents } from '../helper/data/studentData';
import StudentCard from '../components/studentCard';

firebase.initializeApp(firebaseConfig);

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((response) => setStudents(response));
  }, []);

  console.warn(students);

  return (
    <div className='App'>
      <StudentForm formTitle='Student Form'/>
      <hr/>
      {students.map((studentInfo) => (
        <StudentCard key={studentInfo.firebaseKey}
          name={studentInfo.name}
          grade={Number(studentInfo.grade)}
          teacher={studentInfo.teacher}
          handleClick={() => console.warn(`${studentInfo.name}'s teacher is ${studentInfo.teacher}`)}
        />
      ))}
    </div>
  );
}

export default App;
