import React, { Suspense } from 'react';
import { observer } from 'mobx-react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import Spinner from './components/ui/spinner/Spinner';

class App extends React.Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
    );
  }
}

export default observer(App);
