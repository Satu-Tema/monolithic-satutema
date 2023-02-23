import { Box, Button, Container, VStack, Text, Center, Flex, Icon } from '@chakra-ui/react';
import DashboardLayoutUser from 'components/dashboard/DashboardLayoutUser';
import generateSidebarItemsUsers from 'utils/generatedata/sidebar/sidebarItems/users';

const UserDashboard = () => {
   return (
      <DashboardLayoutUser sidebarFor="user">
         <VStack align="stretch" py="4">
            <Container maxW="container.lg">
               <Button variant="outline" colorScheme="blue" w="full">
                  Lihat Website
               </Button>
               <Box
                  w="full"
                  transitionProperty="min-width, width"
                  transitionDuration="ultra-slow"
                  minH="80vh"
                  mt={4}
                  borderRadius={10}
                  border="1px solid rgba(18, 18, 18, 0.13)"
                  p={5}
               >
                  <Flex gap={3} flexWrap="wrap">
                     {generateSidebarItemsUsers()
                        .filter((_, i) => i !== 0)
                        .map((el, i) => (
                           <Box
                              p={5}
                              minH={25}
                              rounded={10}
                              border="1px solid rgba(18, 18, 18, 0.13)"
                              width={{
                                 base: 'full',
                                 md: 192,
                              }}
                              key={i}
                           >
                              <Center>
                                 <Icon fontSize={40} as={el.icon} />
                              </Center>
                              <Center>
                                 <Text mt={2}>{el.name}</Text>
                              </Center>
                           </Box>
                        ))}
                  </Flex>
               </Box>
            </Container>
         </VStack>
      </DashboardLayoutUser>
   );
};

export default UserDashboard;
