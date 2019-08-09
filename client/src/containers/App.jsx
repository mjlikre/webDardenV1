import React from 'react';
import NavBar from '../components/NavBar';
import Widget from '../components/Chat';

export default ({ children }) => {
  return (
    <div>
      <NavBar />
      <Widget />
      {children}
    </div>
  );
};
