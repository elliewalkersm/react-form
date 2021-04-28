import React, { useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteStudent } from '../helper/data/studentData';
import StudentForm from '../studentForm';

const StudentCard = ({
  firebaseKey,
  name,
  grade,
  teacher,
  setStudents
}) => {
  const [updating, setUpdating] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteStudent(firebaseKey)
          .then((studentArray) => setStudents(studentArray));
        break;
      case 'update':
        setUpdating((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Card body>
      <CardTitle tag="h5">{name}</CardTitle>
      <CardText>Grade: {grade}</CardText>
      <CardText>Teacher: {teacher}</CardText>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Student</Button>
      <Button color="info" onClick={() => handleClick('Update')}>
        {updating ? 'Close Form' : 'Update Student'}
      </Button>
      {
        updating && <StudentForm
          formTitle='Edit Student'
          setStudents={setStudents}
          firebaseKey={firebaseKey}
          name={name}
          grade={grade}
          teacher={teacher}
        />
      }
    </Card>
  );
};

StudentCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  teacher: PropTypes.string.isRequired,
  setStudents: PropTypes.func
};

export default StudentCard;
