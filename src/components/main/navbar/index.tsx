import {
   Box,
   Button,
   Flex,
   Container,
   Text,
   IconButton,
   Menu,
   MenuButton,
   Avatar,
   MenuList,
   Center,
   MenuDivider,
   MenuItem,
} from '@chakra-ui/react';
import { useDashboard } from 'context/DashboardProvider';
import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { logout } from 'redux/userSlice';

const MainNavbar = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { onSidebarToggle } = useDashboard();
   const user = useSelector((state: any) => state.user);
   return (
      <Box
         background="#fff"
         position="fixed"
         minW="100%"
         borderBottomWidth={2}
         borderBottomColor="rgba(18, 18, 18, 0.1)"
      >
         <Container maxW="container.lg">
            <Flex
               top={0}
               as="nav"
               minW="full"
               zIndex={1}
               alignItems={'center'}
               justifyContent="space-between"
               p={5}
            >
               <NavLink to="/">
                  <img
                     loading="lazy"
                     alt="Satu Tema"
                     src="./images/satutema.png"
                     style={{ objectFit: 'cover' }}
                     width={150}
                     height={100}
                  />
               </NavLink>
               <Box>
                  <Flex gap={15} display={{ base: 'none', md: 'flex' }}>
                     <Link to="/home">
                        <Text fontWeight="semibold">Beranda</Text>
                     </Link>
                     <Link to="/home">
                        <Text fontWeight="semibold">Kenapa Satu Tema</Text>
                     </Link>
                     <Link to="/home">
                        <Text fontWeight="semibold">Project</Text>
                     </Link>
                  </Flex>
               </Box>
               <Flex gap={5}>
                  {user.isAuth ? (
                     <>
                        <Box>
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
                                 <Avatar
                                    size={'sm'}
                                    src={'https://avatars.dicebear.com/api/male/yukafi.svg'}
                                 />
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
                                 <MenuItem
                                    onClick={() => {
                                       if (user.value.authorize === 'admin')
                                          return navigate('/admin');
                                       else return navigate('/user');
                                    }}
                                 >
                                    Dashboard
                                 </MenuItem>
                                 <MenuItem>Account Settings</MenuItem>
                                 <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
                              </MenuList>
                           </Menu>
                        </Box>
                     </>
                  ) : (
                     <>
                        {' '}
                        <Button
                           colorScheme="teal"
                           variant="outline"
                           _hover={{ bg: 'teal', color: '#fff' }}
                           onClick={() => navigate('/auth/register')}
                        >
                           Buat Website
                        </Button>
                        <Button
                           colorScheme="teal"
                           variant="outline"
                           _hover={{ bg: 'teal', color: '#fff' }}
                           onClick={() => navigate('/auth/login')}
                        >
                           Login
                        </Button>
                     </>
                  )}
               </Flex>
            </Flex>
         </Container>
      </Box>
   );
};

export default MainNavbar;
