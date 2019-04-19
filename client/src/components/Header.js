import React, { Component } from 'react'
import { Consumer } from '../Context';


export default class header extends Component {
    render() {
        return (
            <Consumer>
                { context => (
                    <div className="header">
                        <title>Full Stack App with React and a REST API</title>
                        <div className="bounds">
                            <h1 className="header--logo" >Courses</h1>
                            
                                { localStorage.getItem("isAuth") ? (
                                    <nav><span>Welcome {localStorage.getItem("user")}!</span><a className="signout" href="/signout" onClick={context.actions.getUnAuthenticated} >Sign Out</a></nav>
                                ) : (
                                    <nav><a className="signup" href="/signup">Sign Up</a><a className="signin" href="/signin">Sign In</a></nav>
                                ) 
                                }
                        </div>
                    </div>
                )}
            </Consumer>
        );
    }
    
    
}

