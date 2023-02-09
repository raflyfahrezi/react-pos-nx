import { Refine } from '@pankod/refine-core';
import { dataProvider } from '@pankod/refine-supabase';
import { Layout, ErrorComponent } from '@pankod/refine-antd';

import resources from '@react-pos/admin/resources';
import { LoginModule } from '@react-pos/admin/modules';
import { supabaseClient } from '@react-pos/admin/utils';
import { authProvider, routesProvider } from '@react-pos/admin/services';

const App = () => {
  return (
    <Refine
      Layout={Layout}
      resources={resources}
      LoginPage={LoginModule}
      authProvider={authProvider}
      catchAll={<ErrorComponent />}
      routerProvider={routesProvider}
      dataProvider={dataProvider(supabaseClient)}
    />
  );
};

export default App;
