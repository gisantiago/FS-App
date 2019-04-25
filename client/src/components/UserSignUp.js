import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../Context';



class UserSignUp extends Component {

    constructor(props) {
      super(props)
        this.state = {
          firstName: '',
          lastName: '',
          emailAddress: '',
          password: '',
          confirmPassword: ''      
            }
      this.createUser = this.createUser.bind(this)
    }

    userInput = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      });
  };

  createUser(e) {
      e.preventDefault();
      console.log(this.state.firstName);

      axios.post('http://localhost:5000/api/users', 
          {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailAddress: this.state.emailAddress,
            password: this.state.password
      }).then(res => {
          console.log(res);
          console.log(res.data);
          // this.props.history.push("/courses");
      }).catch(error => {
          console.log('Error: Updating the course details', error);
      });
  }

  cancelUser = (e) => {
      e.preventDefault();
      this.props.history.push("/courses");
  }


    render() {
        return (
          <Consumer>
            { ({ actions }) => (
                <div>
                {/* <div class="header">
                  <div class="bounds">
                    <h1 class="header--logo">Courses</h1>
                    <nav><a class="signup" href="sign-up.html">Sign Up</a><a class="signin" href="sign-in.html">Sign In</a></nav>
                  </div>
                </div> */}
                <hr />
                <div className="bounds">
                  <div className="grid-33 centered signin">
                    <h1>Sign Up</h1>
                    <div>
                      <form onSubmit={this.createUser} > 
                        <div><input id="firstName" name="firstName" type="text" className="" placeholder="First Name" value={this.state.firstName} onChange={this.userInput} /></div>
                        <div><input id="lastName" name="lastName" type="text" className="" placeholder="Last Name" value={this.state.lastName} onChange={this.userInput} /></div>
                        <div><input id="emailAddress" name="emailAddress" type="text" className="" placeholder="Email Address" value={this.state.emailAddress} onChange={this.userInput} /></div>
                        <div><input id="password" name="password" type="password" className="" placeholder="Password" value={this.state.password} onChange={this.userInput} /></div>
                        <div><input id="confirmPassword" name="confirmPassword" type="password" className="" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.userInput} /></div>
                        <div className="grid-100 pad-bottom">
                          <button className="button" type="submit" >Sign Up</button>
                          <button className="button button-secondary" type="button" onClick={this.cancelUser} >Cancel</button>
                        </div>
                      </form>
                    </div>
                    <p>&nbsp;</p>
                    <p>Already have a user account? <a href="sign-in.html">Click here</a> to sign in!</p>
                  </div>
                </div>
              </div>
            )}
          </Consumer>
        );
    }

}

export default UserSignUp;