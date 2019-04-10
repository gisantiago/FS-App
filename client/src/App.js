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

export default class App extends Component {


  render() {

    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          
          
          <Switch>
            <Route exact path={["/", "/Courses"]} component={ Courses }/>
            <Route exact path="/CourseDetail/:id" component={ CourseDetail }  />
          </Switch>




        </div>
      </BrowserRouter>
    );
  }
}


