import { AuthProvider } from '@pankod/refine-core';

const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    return Promise.resolve();
  },
  logout: async () => {
    return Promise.resolve();
  },
  checkAuth: async () => {
    return Promise.resolve();
  },
  checkError: async () => {
    return Promise.resolve();
  },
};

export default authProvider;
