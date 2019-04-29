import React from 'react';
import { Consumer } from './Context';
import { Route, Redirect } from 'react-router-dom';


// HOC to protect the create/update course routes
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Consumer>
        {/* if isAuth true, then user is able to access the protected routes: see App.js for <PrivateRoute>*/}
        { ({ isAuth }) => (
            <Route {...rest} render={props => (
                localStorage.getItem('user')
                    ? <Component {...props} />
                    : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
            )} />
        )}
    </Consumer>
)

export default PrivateRoute;