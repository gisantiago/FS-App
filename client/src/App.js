import React, { Component } from 'react';
import { Provider } from './Context';
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
      <Provider>
        <BrowserRouter>
            <div className="container">
              <Header />
              <Switch>
                <Route exact path={["/", "/courses"]} component={ Courses }/>
                <Route exact path="/signin" component={ UserSignIn } />
                <Route exact path="/courses/create-course" component={ CreateCourse } />
                <Route exact path="/courses/:id/update-course" component={ UpdateCourse } />
                <Route exact path="/course-detail/:id" component={ CourseDetail }  />
                <Route exact path="/signup" component={ UserSignUp } />
                <Route exact path="/signout" />
              </Switch>
            </div>
        </BrowserRouter>
      </Provider>
    );
  }
}


