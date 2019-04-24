import React from 'react';
import { Consumer } from './Context';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Consumer>
        { ({ isAuth }) => (
            <Route {...rest} render={props => (
                localStorage.getItem('userID')
                    ? <Component {...props} />
                    : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
            )} />
        )}
    </Consumer>
)

export default PrivateRoute;