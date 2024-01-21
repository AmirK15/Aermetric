import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../enums/routes';
import PrimaryButton from '../../components/ui/primaryButton/PrimaryButton';
import styles from './UserInfo.module.css';
import Spinner from '../ui/spinner/Spinner';
import store from '../../store/store';
import { observer } from 'mobx-react';

class UserInfo extends React.Component {
  render() {
    const { userInfo, isLoading } = store;

    if (isLoading) {
      return <Spinner />;
    }

    return (
      <>
        <section className={styles.info}>
          <div className={styles.main}>
            <img className={styles.image} src={userInfo.image} alt={userInfo.firstName} />
            <h2 className={styles.title}>
              {userInfo.firstName} {userInfo.lastName}
            </h2>
            <p>{userInfo.university}</p>
            <ul className={styles.list}>
              <li className={styles.item}>{userInfo.address.city}</li>
              <li className={styles.item}>{userInfo.email}</li>
              <li className={styles.item}>{userInfo.phone}</li>
            </ul>
            <Link to={Routes.landing}>
              <PrimaryButton title="Back" />
            </Link>
          </div>
        </section>
      </>
    );
  }
}

export default observer(UserInfo);
