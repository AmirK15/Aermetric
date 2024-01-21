import React from 'react';
import InputSearch from '../ui/inputSearch/InputSearch';
import CustomSelect from '../ui/customSelect/CustomSelect';
import styles from './UsersFilters.module.css';
import debounce from 'lodash.debounce';
import store from '../../store/store';

class UsersFilters extends React.Component {
  debouncedSearchUser = debounce(this.handleSearchUser, 500);

  handleChangeTotal(e: React.ChangeEvent<HTMLSelectElement>) {
    store.setLimit(Number(e.target.value));
    store.getUsers();
  }

  handleSearchUser(e: React.ChangeEvent<HTMLInputElement>) {
    store.setSearchQuery(e.target.value);
    store.getUsers();
  }

  render() {
    return (
      <section className={styles.filters}>
        <InputSearch onChange={(e) => this.debouncedSearchUser(e)} placeholder="Search..." />
        <CustomSelect onChange={(e) => this.handleChangeTotal(e)} />
      </section>
    );
  }
}

export default UsersFilters;
