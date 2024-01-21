import React from 'react';
import styles from './Spinner.module.css';

class Spinner extends React.Component {
  render() {
    return <span className={styles.loader}></span>;
  }
}

export default Spinner;
