import React from 'react';
import styles from './PrimaryButton.module.css';
import { IButton } from '../../../models/buttons';

class PrimaryButton extends React.Component<IButton> {
  render() {
    const { title, ...rest } = this.props;
    return (
      <button className={styles.primaryBtn} {...rest}>
        {title}
      </button>
    );
  }
}

export default PrimaryButton;
