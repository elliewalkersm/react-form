import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteStudent(firebaseKey)
          .then((studentArray) => setStudents(studentArray));
        break;
      case 'update':
        setUpdating((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/students/${firebaseKey}`);
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
      <Button color="secondary" onClick={() => handleClick('view')}>View Student</Button>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Student</Button>
      <Button color="info" onClick={() => handleClick('update')}>
        {updating ? 'Close Form' : 'Update Student'}
      </Button>
      {
        updating && <StudentForm
          formTitle='Update Student'
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
