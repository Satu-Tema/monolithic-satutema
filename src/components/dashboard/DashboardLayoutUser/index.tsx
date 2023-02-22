import { Flex, Box } from '@chakra-ui/react';
import DashboardProvider from 'context/DashboardProvider';
import { DashboardLayoutProps, DashboardSidebarNavItem } from 'ts/DashboardSidebar';
import generateSidebarItemsUsers from 'utils/generatedata/sidebar/sidebarItems/users';
import generateSidebarItemsAdmin from 'utils/generatedata/sidebar/sidebarItems/admin';
import DashboardNavbarUser from '../DashboardNavbarUser';
import DashboardSidebarUser from '../DashboardSidebarUser';

const DashboardLayoutUser = ({ sidebarFor, children }: DashboardLayoutProps) => {
   let sidebarItems: DashboardSidebarNavItem[] = [];
   //   useAuth(sidebarFor === 'pengajar' ? 'USER' : 'ADMIN');
   //   const { data: isInstructor } = useRemoteIsInstructor();
   switch (sidebarFor) {
      case 'user':
         sidebarItems = generateSidebarItemsUsers();
         break;
      default:
         sidebarItems = generateSidebarItemsAdmin();
   }

   return (
      <DashboardProvider>
         <DashboardNavbarUser />
         <Flex overflow="hidden">
            <DashboardSidebarUser items={generateSidebarItemsUsers()} />
            <Box ml={5} p={3}>
               {children}
            </Box>
         </Flex>
      </DashboardProvider>
   );
};

export default DashboardLayoutUser;