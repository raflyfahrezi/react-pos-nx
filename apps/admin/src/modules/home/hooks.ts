import { useList } from '@pankod/refine-core';
import { Responsive, WidthProvider } from 'react-grid-layout';

const useHome = () => {
  const ResponsiveGridLayout = WidthProvider(Responsive);

  const { data: productList } = useList({
    resource: 'product',
  });

  const { data: userList } = useList({
    resource: 'user',
  });

  const { data: purchaseList } = useList({
    resource: 'purchase',
    metaData: {
      select: '*, product(name, price)',
    },
    config: {
      pagination: {
        pageSize: 100,
      },
    },
  });

  return {
    userList,
    productList,
    purchaseList,
    ResponsiveGridLayout,
  };
};

export default useHome;
