import { Box, HStack, IconButton, Stack } from '@chakra-ui/react';
import { FiLogOut, FiMenu } from 'react-icons/fi';
import { useDashboard } from 'context/DashboardProvider';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/userSlice';

const DashboardNavbar = () => {
   const dispatch = useDispatch();
   const { isDesktopSidebarOpened, onSidebarToggle } = useDashboard();

   return (
      <Stack
         p="6"
         borderColor="rgba(18, 18, 18, 0.1)"
         borderBottomWidth={1}
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
               <IconButton
                  onClick={() => dispatch(logout())}
                  icon={<FiLogOut />}
                  variant="solid-alt"
                  aria-label="LogOut"
               />
            </Box>
         </HStack>
      </Stack>
   );
};

export default DashboardNavbar;
