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

  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      users: [],
      courseID: []
    };
  }

    

  componentDidMount() {
    this.getCourses();
    
    // this.getUsers();
  }

  getCourses = () => {
    fetch('/api/courses')
      .then(res => res.json())
      .then(courses => this.setState({ courses }));
  };

 

  // getUsers = () => {
  //   fetch('/api/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({ users }));
  // }

  render() {
    console.log(this.state.courses);
    
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          
          
          <Switch>
            <Route exact path={["/", "/Courses"]} render={ () => <Courses data={this.state.courses}/> }/>
            <Route exact path="/CourseDetail/:id" render={ () => <CourseDetail data={this.state.courses}/> }  />
          </Switch>




        </div>
      </BrowserRouter>
    );
  }
}


