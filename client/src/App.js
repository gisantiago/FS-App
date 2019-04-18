import React, { Component } from 'react';
import PrivateRoute from './PrivateRoute';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './global.css';
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
//import UserSignOut from './components/UserSignOut';

export default class App extends Component {
  
  render() {    
    return (
      <BrowserRouter>
          <div className="container">
            <Header />
            <Switch>
              <Route exact path={["/", "/courses"]} component={ Courses } />
              <Route path="/signin" component={ UserSignIn } />
              <PrivateRoute exact path="/courses/create-course" component={ CreateCourse } />
              <PrivateRoute exact path="/courses/:id/update-course" component={ UpdateCourse } />
              <Route exact path="/courses/course-detail/:id" component={ CourseDetail }  />
              <Route exact path="/signup" component={ UserSignUp } />
              <Route exact path="/signout" />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}


