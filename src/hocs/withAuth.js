import React from 'react';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = true; // Simulate auth
    return isAuthenticated ? <WrappedComponent {...props} /> : <p className="text-red-500">Login required</p>;
  };
};

export default withAuth;