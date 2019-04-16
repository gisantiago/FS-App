import React, { Component } from 'react';
import axios from 'axios';

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
            //   isAuth: true
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
        //   isAuth: false
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
      };

      render() {
        return (
          <AuthContext.Provider
            value={{
                isAuth: this.state.isAuth, 
                getAuthenticated: this.getAuthenticated,
                etUser: this.getUser,
                getUnAuthenticated: this.getUnAuthenticated,
                user: this.state.user 
            }}>          
                {this.props.children}
          </AuthContext.Provider>
        );
      }
}





export const Consumer = AuthContext.Consumer;