import type { ReactNode } from 'react';

import { Flex } from '@chakra-ui/react';

import DashboardMain from '../DashboardMain';
import DashboardSidebar from '../DashboardSidebar';
import DashboardProvider from 'context/DashboardProvider';
import { DashboardLayoutProps, DashboardSidebarNavItem } from 'ts/DashboardSidebar';
import generateSidebarItemsUsers from 'utils/generatedata/sidebar/sidebarItems/users';
import generateSidebarItemsAdmin from 'utils/generatedata/sidebar/sidebarItems/admin';

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
   return (
      <Flex overflow="hidden">
         <DashboardProvider>
            <DashboardSidebar items={generateSidebarItemsAdmin()} />
            <DashboardMain>{children}</DashboardMain>
         </DashboardProvider>
      </Flex>
   );
};

export default DashboardLayout;
