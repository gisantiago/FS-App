import React from 'react';
import { Consumer } from '../Context';


const Header = (props) => {
    return (
        <Consumer>
            { context => (
                <div className="header">
                    <title>Full Stack App with React and a REST API</title>
                    <div className="bounds">
                        <h1 className="header--logo" >Courses</h1>
                            { context.isAuth ? (
                                <nav><span>Welcome {context.user}!</span><a className="signout" href="/signout">Sign Out</a></nav>
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

export default Header;