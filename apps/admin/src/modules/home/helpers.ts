import { PageHeaderProps } from '@pankod/refine-antd';

export const headerProps: PageHeaderProps = {
  title: 'Dashboard',
};

export const breakpoints = {
  lg: 600,
};

export const cols = {
  lg: 6,
};

export const layouts = {
  lg: [
    { i: 'products', x: 0, y: 0, w: 1, h: 1 },
    { i: 'purchases', x: 1, y: 0, w: 1, h: 1 },
    { i: 'users', x: 2, y: 0, w: 1, h: 1 },
    { i: 'revenue', x: 3, y: 0, w: 3, h: 1 },
    { i: 'purchasesGraph', x: 0, y: 2, w: 6, h: 2 },
  ],
};
