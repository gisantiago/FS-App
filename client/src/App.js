import React, { Component } from 'react';
import { Provider } from './Context';
// import logo from './logo.svg';
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
//import UserSignOut from './components/UserSignOut';

export default class App extends Component {

  


  render() {    
    return (
      <Provider>
        <BrowserRouter>
            <div className="container">
              
              <Header />

              <Switch>
                <Route exact path={["/", "/Courses"]} component={ Courses }/>
                <Route exact path="/UserSignIn" component={ UserSignIn } />
                <Route exact path="/Courses/CreateCourse" component={ CreateCourse } />
                <Route exact path="/Courses/:id/UpdateCourse" component={ UpdateCourse } />
                <Route exact path="/CourseDetail/:id" component={ CourseDetail }  />
                
                <Route exact path="/UserSignUp" component={ UserSignUp } />
                <Route exact path="/UserSignOut" />
              </Switch>
            </div>
        </BrowserRouter>
      </Provider>
    );
  }
}


