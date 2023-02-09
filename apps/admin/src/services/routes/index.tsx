import { AuthPage } from '@pankod/refine-antd';
import { IRouterProvider } from '@pankod/refine-core';
import routerProvider from '@pankod/refine-react-router-v6';

const routesProvider: IRouterProvider = {
  ...routerProvider,
  routes: [
    {
      path: '/login',
      element: <AuthPage type="login" />,
    },
    {
      path: '/register',
      element: <AuthPage type="register" />,
    },
  ],
};

export default routesProvider;
