import React from 'react';
import { observer } from 'mobx-react';
import UserInfo from '../../components/userInfo/UserInfo';
import store from '../../store/store';
import { useParams } from 'react-router-dom';

interface IUserInfo {
  params?: {
    id: string;
  };
}

function withParams<P extends IUserInfo>(Component: React.ComponentType<P>): React.FC<P> {
  return (props: P) => {
    const params = useParams();
    const newProps = { ...props, params };

    return <Component {...newProps} />;
  };
}

class UserInfoPage extends React.Component<IUserInfo> {
  componentDidMount() {
    this.getUserInfo();
  }
  getUserInfo() {
    const { id } = this.props.params || { id: '' };
    store.getUser(id);
  }
  render() {
    return (
      <main>
        <UserInfo />
      </main>
    );
  }
}

export default observer(withParams(UserInfoPage));
