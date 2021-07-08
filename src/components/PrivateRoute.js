import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

const PrivateRoute = ({
  component: Component,

  redirectTo,
  ...routeProps
}) => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
};

export default PrivateRoute;
