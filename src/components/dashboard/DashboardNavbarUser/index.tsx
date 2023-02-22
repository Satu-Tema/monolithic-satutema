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
} from '@chakra-ui/react';
import { useDashboard } from 'context/DashboardProvider';

const DashboardNavbarUser = () => {
   const { isDesktopSidebarOpened } = useDashboard();

   return (
      <Stack
         maxW="100%"
         p="5"
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
            <img
               loading="lazy"
               alt="Satu Tema"
               src="./images/satutema.png"
               style={{ objectFit: 'cover' }}
               width={150}
               height={100}
            />
            <Box position="fixed" right={5}>
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
                     <MenuItem>Logout</MenuItem>
                  </MenuList>
               </Menu>
            </Box>
         </HStack>
      </Stack>
   );
};

export default DashboardNavbarUser;
