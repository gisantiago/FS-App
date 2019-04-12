import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


import './global.css';
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';

export default class App extends Component {


  render() {

    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          
          
          <Switch>
            <Route exact path={["/", "/Courses"]} component={ Courses }/>
            <Route exact path="/CourseDetail/:id" component={ CourseDetail }  />
            <Route exact path="/UserSignIn" component={ UserSignIn } />
            <Route exact path="/UserSignUp" component={ UserSignUp } />
            <Route exact path="/CreateCourse" component={ CreateCourse } />
            <Route exact path="/UpdateCourse" component={ UpdateCourse } />
          </Switch>




        </div>
      </BrowserRouter>
    );
  }
}


