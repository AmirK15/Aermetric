import React from 'react';
import { observer } from 'mobx-react';
import UsersList from '../../components/usersList/UsersList';
import UsersFilters from '../../components/usersFilters/UsersFilters';
import store from '../../store/store';

class MainPage extends React.Component {
  componentDidMount() {
    store.getUsers();
  }

  render() {
    return (
      <main>
        <UsersFilters />
        <UsersList />
      </main>
    );
  }
}

export default observer(MainPage);
