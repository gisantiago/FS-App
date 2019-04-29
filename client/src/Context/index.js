import React, { Component } from 'react';
import axios from 'axios';



const AuthContext = React.createContext();

export class Provider extends Component {


  constructor(props) {
    super(props);
    this.state = {
      user: '',
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
      confirmPassword: '',
      isAuth: false,
      errors: []
    }
     this.createUser = this.createUser.bind(this)
  }

  // create user account via the api and authenticate it via the getAuthenticated(). it also fetches any validator error via catch method 
  createUser(e) {
    e.preventDefault();
    console.log(this.state.firstName);

    if (this.state.password !== this.state.confirmPassword) {
      alert("Passwords don't match");
    } else {

      axios.post('http://localhost:5000/api/users', 
          {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailAddress: this.state.emailAddress,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
      }).then(res => {
          if (res.status === 201) {
            this.getAuthenticated();
          } else {
            throw new Error();
          } 
          // fetches api validators
      }).catch(err => {
          console.log("Error = ", err.response.data.errors);
          this.setState({
            errors: err.response.data.errors
          });
      });
    }
  }
    
  //  Authenticate user and set all the localStorage items. This function allow users to create/delete/update courses
  //  and navigate through private routes such as create-course and update-course
  getAuthenticated =  () => {
    // e.preventDefault();

    axios.get(`http://localhost:5000/api/users`, {
        // headers: { 'Authorization': + basicAuth }
        auth: {
            username: this.state.emailAddress,
            password: this.state.password
        }
    }).then(res => {
        this.setState({
            userData: res.data,
            user: `${res.data.firstName} ${res.data.lastName}`,
            username: res.data.emailAddress,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            isAuth: true
        });
        localStorage.setItem("userID", this.state.userData.user_id);
        localStorage.setItem("user", this.state.user);
        localStorage.setItem("isAuth", this.state.isAuth);
        localStorage.setItem("firstName", this.state.firstName);
        localStorage.setItem("lastName", this.state.lastName);
        localStorage.setItem("username", this.state.username);
        localStorage.setItem("password", this.state.password);
        
        console.log('Authenticated');
        window.location='/courses'
        // this.saveItem('id_token', res.id_token);
    }).catch(function(error) {
    console.log('Error on Authentication');
    });
  }
    
  // Unanthenticate users via setting the isAuth to false and clear all localStorage items
  getUnAuthenticated = () => {
    this.setState({
        user: null,
        isAuth: false
    });
    localStorage.clear();
  }


  userInput = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      });
  }

  formReset = (e) => {
      e.preventDefault();
      document.getElementById("sigin-form").reset();
      window.location='/courses'
  }


  render() {
    return (
      <AuthContext.Provider
        value={{
            isAuth: this.state.isAuth, 
            user: this.state.user,
            username: this.state.emailAddress,
            password: this.state.password,
            userID: this.state.userID,
            firstName: this.state.firstName,
            confirmPassword: this.state.confirmPassword,
            errors: this.state.errors,
            actions: {
                getAuthenticated: this.getAuthenticated,
                getUnAuthenticated: this.getUnAuthenticated,
                userInput: this.userInput,
                formReset: this.formReset,
                createUser: this.createUser
            }
        }}>          
            {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export const Consumer = AuthContext.Consumer;