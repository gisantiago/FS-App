import React from 'react';
import { Link } from 'react-router-dom';




class Header extends React.Component {
    

    render() {
        return (
    
            <div className="header">
                <title>Full Stack App with React and a REST API</title>
                <div className="bounds">
                    <h1 className="header--logo" >Courses</h1>
    
                             <nav><span>Welcome Joe Smith!</span><a className="signout" href="index.html">Sign Out</a></nav> 
                          
                             <nav><a className="signup" href="/UserSignUp">Sign Up</a><a className="signin" href="UserSignIn">Sign In</a></nav>
                </div>
            </div>
      
        );
    }
}

export default Header;