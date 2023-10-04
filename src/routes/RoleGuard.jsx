// RoleGuard.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const RoleGuard = ({ component: Component, allowedRoles, userRole, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        allowedRoles.includes(userRole) ? (
          <Component {...props} />
        ) : (
          <Navigate to="/unauthorized" replace={true} />
        )
      }
    />
  );
};

export default RoleGuard;
