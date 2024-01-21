import React from 'react';
import styles from './CustomSelect.module.css';

type ICustomSelect = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

class CustomSelect extends React.Component<ICustomSelect> {
  render() {
    const { onChange, ...rest } = this.props;

    return (
      <div className={styles.customSelect}>
        <select className={styles.select} onChange={onChange} {...rest}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    );
  }
}

export default CustomSelect;
