import { Layout } from '@pankod/refine-antd';
import { Refine } from '@pankod/refine-core';
import { dataProvider } from '@pankod/refine-supabase';
import routerProvider from '@pankod/refine-react-router-v6';

import resources from '@react-pos/admin/resources';
import { supabaseClient } from '@react-pos/admin/utils';

const App = () => {
  return (
    <Refine
      Layout={Layout}
      resources={resources}
      routerProvider={routerProvider}
      dataProvider={dataProvider(supabaseClient)}
    />
  );
};

export default App;
