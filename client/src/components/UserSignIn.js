import React, { Component } from 'react'
import { Consumer } from '../Context';


export default class UserSignIn extends Component {

    
    render() {
        return (
            <Consumer>
                { ({ actions }) => (
                    <div>
                    {/* <div className="header">
                        <div className="bounds">
                        <h1 className="header--logo">Courses</h1>
                        <nav><a className="signup" href="sign-up.html">Sign Up</a><a className="signin" href="sign-in.html">Sign In</a></nav>
                        </div>
                    </div> */}
                    <hr />
                    <div className="bounds">
                        <div className="grid-33 centered signin">
                        <h1>Sign In</h1>
                        <div>
                            <form id="sigin-form" onSubmit={actions.getAuthenticated}>
                            <div><input id="emailAddress" name="emailAddress" type="text" className="" placeholder="Email Address" onChange={actions.userInput} /></div>
                            <div><input id="password" name="password" type="password" className="" placeholder="Password" onChange={actions.userInput} /></div>
                            <div className="grid-100 pad-bottom">
                                <button className="button" type="submit">Sign In</button>
                                <button type="button" className="button button-secondary" onClick={actions.formReset} href='index.html'>Cancel</button>
                            </div>
                            </form>
                        </div>
                        <p>&nbsp;</p>
                        <p>Don't have a user account? <a href="/signup">Click here</a> to sign up!</p>
                        </div>
                    </div>
                </div>
                )}
            </Consumer>
        );
        // console.log(document.getElementById('emailAddress').getAttribute('value'));
    }
    
}

