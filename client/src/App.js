import React, { Component } from 'react';
import { Provider } from './Context';
import axios from 'axios';
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

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      firstName: null,
      lastName: null,
      emailAddress: null,
      password: null,
      isAuth: false
    };
  }

  componentDidMount() {
    this.getAuthenticated();
    this.getUser();
    this.getUnAuthenticated();
  }

  getAuthenticated = () => {
    const session_url = 'http://localhost:5000/api/users';
    
    axios.post(session_url, {
      auth: {
        username: this.state.emailAddress,
        password: this.state.password
      }
    }).then(res => {
      this.setState({
          user: `${res.data.firstName} ${res.data.lastName}`,
          // isAuth: true
      });
    }).then(function(response) {
      console.log('Authenticated');
    }).catch(function(error) {
      console.log('Error on Authentication');
    });
  }

  getUnAuthenticated = () => {
    this.setState({
      user: null,
      // isAuth: false
    });
  }

  getUser = () => {
    axios.get(`http://localhost:5000/api/users`)
        .then(res => {
            this.setState({
                user: res.data,
            });
    })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }


  render() {
    console.log(this.state.user)
    return (
      <Provider value={{
        isAuth: this.state.isAuth, 
        user: this.state.user 
      }}>
        <BrowserRouter>
            <div className="container">
              
              <Header data={this.state.user}/>

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


