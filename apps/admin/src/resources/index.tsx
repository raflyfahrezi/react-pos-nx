import { ResourceProps } from '@pankod/refine-core';
import { AntdInferencer } from '@pankod/refine-inferencer/antd';
import {
  HomeIcon,
  UserIcon,
  ArchiveBoxIcon,
  CreditCardIcon,
} from '@heroicons/react/24/outline';

import { HomeModule } from '@react-pos/admin/modules';

const resources: ResourceProps[] = [
  {
    name: 'dashboard',
    list: HomeModule,
    icon: <HomeIcon width={14} />,
  },
  {
    name: 'product',
    list: AntdInferencer,
    edit: AntdInferencer,
    create: AntdInferencer,
    canDelete: true,
    icon: <ArchiveBoxIcon width={14} />,
  },
  {
    name: 'purchase',
    list: AntdInferencer,
    edit: AntdInferencer,
    create: AntdInferencer,
    canDelete: true,
    icon: <CreditCardIcon width={14} />,
  },
  {
    name: 'user',
    list: AntdInferencer,
    edit: AntdInferencer,
    create: AntdInferencer,
    canDelete: true,
    icon: <UserIcon width={14} />,
  },
];

export default resources;
