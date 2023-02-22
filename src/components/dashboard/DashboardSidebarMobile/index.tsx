import { useEffect } from 'react';

import {
   Box,
   Drawer,
   DrawerContent,
   DrawerOverlay,
   Flex,
   useColorModeValue,
} from '@chakra-ui/react';
import DashboardSidebarItem from '../DashboardSidebarItem';
import { useLocation } from 'react-router-dom';
import { useDashboard } from 'context/DashboardProvider';
import { DashboardSidebarProps } from 'ts/DashboardSidebar';

const DashboardSidebarMobile = ({ items }: DashboardSidebarProps) => {
   const { pathname } = useLocation();
   const { isMobileSidebarOpened, onSidebarToggle } = useDashboard();

   const bgColor = useColorModeValue('white', 'black');

   useEffect(() => {
      if (isMobileSidebarOpened) onSidebarToggle();
   }, [pathname]);

   return (
      <Drawer isOpen={isMobileSidebarOpened} onClose={onSidebarToggle} placement="left">
         <DrawerOverlay />
         <DrawerContent>
            <Box py="6" h="100vh" overflow="auto" bg={bgColor}>
               <Box ml="6">
                  <img
                     loading="lazy"
                     alt="Satu Tema"
                     src={`${process.env.PUBLIC_URL}/images/satutema.png`}
                     style={{ objectFit: 'cover' }}
                     width={150}
                     height={100}
                  />
               </Box>
               <Flex as="nav" flexDirection="column" align="stretch" mt="12">
                  {items.map((item, index) => (
                     <DashboardSidebarItem key={index} item={item} pathname={pathname} />
                  ))}
               </Flex>
            </Box>
         </DrawerContent>
      </Drawer>
   );
};

export default DashboardSidebarMobile;
