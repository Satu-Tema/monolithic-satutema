import { Box, BoxProps, HStack, IconButton, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiLogOut, FiMenu } from 'react-icons/fi';
import { useDashboard } from 'context/DashboardProvider';

const DashboardNavbar = () => {
   const { isDesktopSidebarOpened, onSidebarToggle } = useDashboard();

   return (
      <Stack
         p="6"
         border={'2px solid rgba(18, 18, 18, 0.1)'}
         alignItems={{
            base: 'stretch',
            md: isDesktopSidebarOpened ? 'stretch' : 'center',
            lg: 'center',
         }}
         direction={{
            base: 'column',
            md: isDesktopSidebarOpened ? 'column' : 'row',
            lg: 'row',
         }}
      >
         <HStack justifyContent="space-between" alignItems="center" flexGrow={1}>
            <IconButton
               icon={<FiMenu />}
               variant="solid-alt"
               onClick={onSidebarToggle}
               aria-label="Menu"
            />
            <Box position="relative">
               <IconButton icon={<FiLogOut />} variant="solid-alt" aria-label="LogOut" />
            </Box>
         </HStack>
      </Stack>
   );
};

export default DashboardNavbar;
