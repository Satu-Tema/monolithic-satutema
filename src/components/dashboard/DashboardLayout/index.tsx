import type { ReactNode } from 'react';

import { Flex } from '@chakra-ui/react';

import DashboardMain from '../DashboardMain';
import DashboardSidebar from '../DashboardSidebar';
import DashboardProvider from 'context/DashboardProvider';
import { DashboardLayoutProps, DashboardSidebarNavItem } from 'ts/DashboardSidebar';
import generateSidebarItemsUsers from 'utils/generatedata/sidebar/sidebarItems/users';
import generateSidebarItemsAdmin from 'utils/generatedata/sidebar/sidebarItems/admin';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
   const user = useSelector((state: any) => state.user);
   if (user.value.authorize === 'user') {
      return <Navigate to="/" replace />;
   }
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
