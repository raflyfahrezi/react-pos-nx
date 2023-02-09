import { PageHeaderProps } from '@pankod/refine-antd';

import { format } from 'date-fns';

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

export const eChartOptionsDefault = {
  grid: { top: 8, right: 8, bottom: 24, left: 36 },
  xAxis: {
    type: 'category',
    data: [],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [],
      type: 'line',
      smooth: true,
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
};

export const getPurchaseGroupedByCreatedAt = (data: any): any => {
  if (!data) {
    return {
      dataX: [],
      dataY: [],
    };
  }

  const groupedData = data.reduce((acc: any, item: any) => {
    const date = item['created_at'].split('T')[0];

    const formattedDate = format(new Date(date), 'dd MMM yyyy');

    if (acc[formattedDate]) {
      acc[formattedDate] += 1;
    } else {
      acc[formattedDate] = 1;
    }
    return acc;
  }, {});

  return {
    dataX: Object.keys(groupedData),
    dataY: Object.values(groupedData),
  };
};
