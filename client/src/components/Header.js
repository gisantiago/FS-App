import React from 'react';


const Header = (props) => {
    return (
        <div className="header">
            <title>Full Stack App with React and a REST API</title>
            <div className="bounds">
                <h1 className="header--logo">Courses</h1>
                <nav><a className="signup" href="sign-up.html">Sign Up</a><a className="signin" href="sign-in.html">Sign In</a></nav>
            </div>
        </div>
    );
}

export default Header;