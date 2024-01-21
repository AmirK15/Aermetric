import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { Routes } from '../../enums/routes';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className="container">
          <Link to={Routes.landing}>
            <img
              src="https://assets-global.website-files.com/6125300697f0cc30848dc580/6125300697f0cc707c8dc5c3_logo_blue.svg"
              alt="Aermetric"
            />
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
