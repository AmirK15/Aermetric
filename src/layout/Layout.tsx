import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

class Layout extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <Outlet />
        </div>
      </div>
    );
  }
}

export default Layout;
