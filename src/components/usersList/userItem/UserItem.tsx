import React from 'react';
import { Link, generatePath } from 'react-router-dom';
import { IUser } from '../../../models/users';
import { Routes } from '../../../enums/routes';
import styles from './UserItem.module.css';

type IUserItem = {
  user: IUser;
};

class UserItem extends React.Component<IUserItem> {
  render() {
    const { user } = this.props;
    return (
      <Link className={styles.link} to={generatePath(Routes.userInfo, { id: String(user.id) })}>
        <div className={styles.card}>
          <span className={styles.cardId}>{user.id}</span>
          <img className={styles.cardImage} src={user.image} alt={user.firstName} />
          <div>
            <h2 className={styles.cardName}>
              {user.firstName} <br /> {user.lastName}
            </h2>
            <p className={styles.cardUniversity}>
              {user.university}, {user.address.city}
            </p>
          </div>
        </div>
      </Link>
    );
  }
}

export default UserItem;
