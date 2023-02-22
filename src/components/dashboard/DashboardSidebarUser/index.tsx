import { Box, Center, Flex, Link } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDashboard } from 'context/DashboardProvider';
import { DashboardSidebarProps } from 'ts/DashboardSidebar';
import DashboardSidebarMobile from '../DashboardSidebarMobile';
import DashboardSidebarItemUser from '../DashboardSidebarItemUser';

const DashboardSidebarUser = ({ items }: DashboardSidebarProps) => {
   const { pathname } = useLocation();
   const { isDesktopSidebarOpened } = useDashboard();

   return (
      <Box
         display={{ base: 'none', md: 'block' }}
         as="aside"
         // minW={isDesktopSidebarOpened ? 'xs' : '0'}
         w={isDesktopSidebarOpened ? 'xs' : '0'}
         transitionProperty="min-width, width"
         transitionDuration="ultra-slow"
         minH="80vh"
         m={4}
         borderRadius={10}
         border="1px solid rgba(18, 18, 18, 0.13)"
         // borderRightWidth={isDesktopSidebarOpened ? '1px' : undefined}
         overflow="hidden"
      >
         <Box minW="xs" py="6" overflow="hidden">
            <Flex as="nav" flexDirection="column" align="stretch" mt="12">
               {items.map((item, index) => (
                  <DashboardSidebarItemUser key={index} item={item} pathname={pathname} />
               ))}
            </Flex>
         </Box>
         <DashboardSidebarMobile items={items} />
      </Box>
   );
};

export default DashboardSidebarUser;
