import React from 'react';
import styles from './InputSearch.module.css';

type IInputSearch = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  width?: string;
};

class InputSearch extends React.Component<IInputSearch> {
  render() {
    const { onChange, placeholder, width = 320, ...rest } = this.props;

    return (
      <div style={{ width: `${width}px` }} className={styles.search}>
        <label className={styles.searchLabel}>
          <div className={styles.searchIcon}>
            <svg
              width="20"
              height="20"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            onChange={onChange}
            className={styles.searchInput}
            type="text"
            placeholder={placeholder}
            {...rest}
          />
        </label>
      </div>
    );
  }
}

export default InputSearch;
