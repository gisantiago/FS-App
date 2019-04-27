import React, { Component } from 'react';
import { Consumer } from '../Context';



class UserSignUp extends Component {

  showError(errors) {
    const errorList = errors.map((error) =>
      <li key={error.toString()}>{error}</li>);
    return errorList;
  }

  cancelUser = (e) => {
      e.preventDefault();
      this.props.history.push("/courses");
  }

  render() {
      
      return (
        <Consumer>
          { ({ actions, firstName, lastName, username, password, confirmPassword, errors }) => (
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
                    <div className="validation-errors">
                      <ul>
                        {this.showError(errors)}
                      </ul>
                    </div>
                  </div>


                  <div>
                    <form onSubmit={actions.createUser} > 
                      <div><input id="firstName" name="firstName" type="text" className="" placeholder="First Name" value={firstName} onChange={actions.userInput} /></div>
                      <div><input id="lastName" name="lastName" type="text" className="" placeholder="Last Name" value={lastName} onChange={actions.userInput} /></div>
                      <div><input id="emailAddress" name="emailAddress" type="text" className="" placeholder="Email Address" value={username} onChange={actions.userInput} /></div>
                      <div><input id="password" name="password" type="password" className="" placeholder="Password" value={password} onChange={actions.userInput} /></div>
                      <div>
                        <input id="confirmPassword" name="confirmPassword" type="password" className="" placeholder="Confirm Password" value={confirmPassword} onChange={actions.userInput} />
                      </div>
                      <div className="grid-100 pad-bottom">
                        <button className="button" type="submit" >Sign Up</button>
                        <button className="button button-secondary" type="button" onClick={this.cancelUser} >Cancel</button>
                      </div>
                    </form>
                  </div>
                  <p>&nbsp;</p>
                  <p>Already have a user account? <a href="/signin">Click here</a> to sign in!</p>
                </div>
              </div>
            </div>
          )}
        </Consumer>
      );
  }

}

export default UserSignUp;