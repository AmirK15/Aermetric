import React from 'react';
import { observer } from 'mobx-react';

import CustomPagination from '../ui/customPagination/CustomPagination';
import UserItem from './userItem/UserItem';
import Spinner from '../ui/spinner/Spinner';

import { IUser } from '../../models/users';

import store from '../../store/store';

import styles from './UsersList.module.css';

class UsersList extends React.Component {
  handleChangePage(currentPage: number) {
    store.setCurrentPage(currentPage);
    store.getUsers();
  }

  render() {
    const { data, isLoading } = store;

    if (isLoading) {
      return <Spinner />;
    }
    return (
      <>
        <section className={styles.list}>
          {data.users && data.users.map((user: IUser) => <UserItem user={user} key={user.id} />)}
        </section>
        <CustomPagination
          currentPage={store.currentPage}
          totalPages={store.totalPages}
          onChangePage={this.handleChangePage}
        />
      </>
    );
  }
}

export default observer(UsersList);
