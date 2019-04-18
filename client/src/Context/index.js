import React, { Component } from 'react';
import axios from 'axios';
const session_url = `http://localhost:5000/api/users`;


const AuthContext = React.createContext();

export class Provider extends Component {


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
    

      getAuthenticated = (e) => {
        
        e.preventDefault();
        // const username = this.state.emailAddress;
        // const password = this.state.password;
        // const basicAuth = 'Basic ' + btoa(username + ':' + password);
        axios.get(`http://localhost:5000/api/users`, {
            // headers: { 'Authorization': + basicAuth }
            auth: {
                username: this.state.emailAddress,
                password: this.state.password
            }
        }).then(res => {
            
            this.setState({
                user: `${res.data.firstName} ${res.data.lastName}`,
                isAuth: true,
            });
            console.log('Authenticated')
        }).catch(function(error) {
        console.log('Error on Authentication');
        });
      }
    
      getUnAuthenticated = () => {
        this.setState({
            user: null,
            isAuth: false
        });
      }
    
      getUser = () => {
        axios.get(session_url)
            .then(res => {
                this.setState({
                    user: res.data,
                });
        })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
      };

      userInput = (e) => {
          this.setState({
              [e.target.id]: e.target.value
          });
      }


      render() {
        return (
          <AuthContext.Provider
            value={{
                isAuth: this.state.isAuth, 
                user: this.state.user,
                username: this.state.emailAddress,
                password: this.state.password,
                actions: {
                    getAuthenticated: this.getAuthenticated,
                    getUser: this.getUser,
                    getUnAuthenticated: this.getUnAuthenticated,
                    userInput: this.userInput
                }
            }}>          
                {this.props.children}
          </AuthContext.Provider>
        );
      }
}

export const Consumer = AuthContext.Consumer;