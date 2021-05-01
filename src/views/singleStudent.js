import React, { useEffect, useState } from 'react';
import {
  useParams
} from 'react-router-dom';
import { getSingleStudent } from '../helper/data/studentData';

export default function singleStudent() {
  const [student, setStudent] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleStudent(firebaseKey)
      .then(setStudent);
  }, []);

  return (
    <div>
      <h1>Single Student</h1>
      <h2>{student.name}</h2>
      <h3>{student.teacher}</h3>
      <h4>{student.grade}</h4>
    </div>
  );
}
