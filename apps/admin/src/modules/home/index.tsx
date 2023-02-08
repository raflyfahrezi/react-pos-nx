import { List, Card } from '@pankod/refine-antd';

import { formatNumberToRupiah } from '@react-pos/core-utils';

import useHome from './hooks';
import styles from './styles.module.css';
import { headerProps, breakpoints, cols, layouts } from './helpers';

const HomeModule = () => {
  const { productList, userList, purchaseList, ResponsiveGridLayout } =
    useHome();

  return (
    <List headerProps={headerProps}>
      <ResponsiveGridLayout
        cols={cols}
        layouts={layouts}
        className="layout"
        style={{ width: '100%' }}
        breakpoints={breakpoints}
      >
        <Card key="products" title="Total of Products" className={styles.card}>
          <p className={styles.cardText}>{productList?.data?.length}</p>
        </Card>
        <Card
          key="purchases"
          title="Total of Purchases"
          className={styles.card}
        >
          <p className={styles.cardText}>{purchaseList?.data?.length}</p>
        </Card>
        <Card key="users" title="Total of Users" className={styles.card}>
          <p className={styles.cardText}>{userList?.data?.length}</p>
        </Card>
        <Card key="purchasesGraph" title="Graph of Purchases">
          <p>Hello World</p>
        </Card>
        <Card key="revenue" title="Revenue" className={styles.card}>
          <p className={styles.cardText}>
            {formatNumberToRupiah(
              purchaseList?.data?.reduce(
                (prev, current) =>
                  prev + current?.quantity * current?.product?.price,
                0
              )
            )}
          </p>
        </Card>
      </ResponsiveGridLayout>
    </List>
  );
};

export default HomeModule;
