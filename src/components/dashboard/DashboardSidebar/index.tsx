import { Box, Center, Flex, Link } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDashboard } from 'context/DashboardProvider';
import { DashboardSidebarProps } from 'ts/DashboardSidebar';
import DashboardSidebarItem from '../DashboardSidebarItem';
import DashboardSidebarMobile from '../DashboardSidebarMobile';

const DashboardSidebar = ({ items }: DashboardSidebarProps) => {
   const { pathname } = useLocation();
   const { isDesktopSidebarOpened } = useDashboard();

   return (
      <Box
         display={{ base: 'none', md: 'block' }}
         as="aside"
         minW={isDesktopSidebarOpened ? 'xs' : '0'}
         w={isDesktopSidebarOpened ? 'xs' : '0'}
         transitionProperty="min-width, width"
         transitionDuration="ultra-slow"
         borderRightColor="rgba(18, 18, 18, 0.1)"
         borderRightWidth={isDesktopSidebarOpened ? '1px' : undefined}
         overflow="hidden"
      >
         <Box minW="xs" py="6" overflow="hidden">
            <NavLink to="/">
               <Link ml="6" h="6" outline="none">
                  <Center>
                     <img
                        loading="lazy"
                        alt="Satu Tema"
                        src={`${process.env.PUBLIC_URL}/images/satutema.png`}
                        style={{ objectFit: 'cover' }}
                        width={150}
                        height={100}
                     />
                  </Center>
               </Link>
            </NavLink>
            <Flex as="nav" flexDirection="column" align="stretch" mt="12">
               {items.map((item, index) => (
                  <DashboardSidebarItem key={index} item={item} pathname={pathname} />
               ))}
            </Flex>
         </Box>
         <DashboardSidebarMobile items={items} />
      </Box>
   );
};

export default DashboardSidebar;
