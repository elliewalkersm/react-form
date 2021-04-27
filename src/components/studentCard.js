import React from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteStudent } from '../helper/data/studentData';

const StudentCard = ({
  firebasekey,
  name,
  grade,
  teacher,
  setStudents
}) => {
  const handleClick = () => {
    deleteStudent(firebasekey)
      .then((studentArray) => setStudents(studentArray));
  };

  return (
    <Card body>
      <CardTitle tag="h5">{name}</CardTitle>
      <CardText>Grade: {grade}</CardText>
      <CardText>Teacher: {teacher}</CardText>
      <Button color="danger" onClick={handleClick}>Delete Student</Button>
    </Card>
  );
};

StudentCard.propTypes = {
  firebasekey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  teacher: PropTypes.string.isRequired,
  setStudents: PropTypes.func
};

export default StudentCard;
