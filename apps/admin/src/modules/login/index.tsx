import { AuthPage } from '@pankod/refine-antd';

const LoginModule = () => {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: {
          email: '',
          password: '',
        },
      }}
    />
  );
};

export default LoginModule;
