import React from 'react';
import styles from './CustomPagination.module.css';

type ICustomPagination = {
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
};

class CustomPagination extends React.Component<ICustomPagination> {
  render() {
    const { currentPage, totalPages, onChangePage } = this.props;
    const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
      <div className={styles.wrapper}>
        {pagesArray.map((page) => (
          <button
            key={page}
            disabled={currentPage === page}
            onClick={() => onChangePage(page)}
            className={styles.page}>
            {page}
          </button>
        ))}
      </div>
    );
  }
}

export default CustomPagination;
