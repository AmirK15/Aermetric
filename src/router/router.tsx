import { createBrowserRouter } from 'react-router-dom';
import { Routes } from '../enums/routes';
import MainPage from '../pages/main/MainPage';
import UserInfoPage from '../pages/userInfo/UserInfoPage';
import Layout from '../layout/Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: Routes.landing,
        element: <MainPage />,
        errorElement: <div>Error</div>,
      },
      {
        path: Routes.userInfo,
        element: <UserInfoPage />,
        errorElement: <div>Error</div>,
      },
    ],
  },
]);
