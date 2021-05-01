import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddStudent from '../views/addStudent';
import Home from '../views/home';
import Students from '../views/students';
import singleStudent from '../views/singleStudent';
import NotFound from '../views/NotFound';

export default function Routes({ students, setStudents }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          exact
          path='/students'
          component={() => <Students students={students} setStudents={setStudents} />}
        />
        <Route
          exact
          path='/add-students'
          component={() => <AddStudent setStudents={setStudents} />}
        />
        <Route
          path='/students/:firebaseKey'
          component={singleStudent}
        />
        <Route path='*' component={NotFound}/>
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired
};
