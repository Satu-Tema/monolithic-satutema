import {
   Avatar,
   Box,
   Center,
   HStack,
   Button,
   Menu,
   MenuButton,
   MenuDivider,
   MenuItem,
   MenuList,
   Stack,
   IconButton,
} from '@chakra-ui/react';
import { useDashboard } from 'context/DashboardProvider';
import { FiMenu } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from 'redux/userSlice';

const DashboardNavbarUser = () => {
   const dispatch = useDispatch();
   const { isDesktopSidebarOpened, onSidebarToggle } = useDashboard();

   return (
      <Stack
         maxW="100%"
         p="5"
         py={8}
         zIndex={100}
         backgroundColor="white"
         position="sticky"
         top={0}
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
            <Link to="/">
               <Box display={{ base: 'none', md: 'block' }}>
                  <img
                     loading="lazy"
                     alt="Satu Tema"
                     src={`${process.env.PUBLIC_URL}/images/satutema.png`}
                     style={{ objectFit: 'cover' }}
                     width={150}
                     height={100}
                  />
               </Box>
            </Link>
            <IconButton
               icon={<FiMenu />}
               variant="solid-alt"
               onClick={onSidebarToggle}
               aria-label="Menu"
               display={{ base: 'block', md: 'none' }}
               position={{ base: 'fixed', md: 'relative' }}
               left={4}
            />
            <Box position="fixed" right={4}>
               <Menu>
                  <MenuButton
                     as={Button}
                     rounded={'full'}
                     variant={'link'}
                     cursor={'pointer'}
                     minW={0}
                     borderWidth={1}
                     p={1}
                  >
                     <Avatar size={'sm'} src={'https://avatars.dicebear.com/api/male/yukafi.svg'} />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                     <br />
                     <Center>
                        <Avatar
                           size={'2xl'}
                           src={'https://avatars.dicebear.com/api/male/yukafi.svg'}
                        />
                     </Center>
                     <br />
                     <Center>
                        <p>Yukafi</p>
                     </Center>
                     <br />
                     <MenuDivider />
                     <MenuItem>Account Settings</MenuItem>
                     <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
                  </MenuList>
               </Menu>
            </Box>
         </HStack>
      </Stack>
   );
};

export default DashboardNavbarUser;
