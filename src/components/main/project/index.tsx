import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const MainProjects = () => {
   return (
      <Box p={10} minH="80vh" backgroundImage="./images/bgblue.png">
         <Container maxW="container.lg">
            <Heading textAlign="center" mt={10} fontWeight={500}>
               Projects
            </Heading>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={5} mt={10}>
               <Box textAlign="center" bg="white" p={5} borderRadius="10">
                  <Text mt="5" textAlign="center" fontWeight="semibold">
                     Indomie Sehat
                  </Text>
                  <Link to="">
                     <Text mt="5" textAlign="center">
                        Buat Website Digital Anda dengan Mudah
                     </Text>
                  </Link>
               </Box>
               <Box textAlign="center" bg="white" p={5} borderRadius="10">
                  <Text mt="5" textAlign="center" fontWeight="semibold">
                     Indomie Sehat
                  </Text>
                  <Link to="">
                     <Text mt="5" textAlign="center">
                        Buat Website Digital Anda dengan Mudah
                     </Text>
                  </Link>
               </Box>
               <Box textAlign="center" bg="white" p={5} borderRadius="10">
                  <Text mt="5" textAlign="center" fontWeight="semibold">
                     Indomie Sehat
                  </Text>
                  <Link to="">
                     <Text mt="5" textAlign="center">
                        Buat Website Digital Anda dengan Mudah
                     </Text>
                  </Link>
               </Box>
               <Box textAlign="center" bg="white" p={5} borderRadius="10">
                  <Text mt="5" textAlign="center" fontWeight="semibold">
                     Indomie Sehat
                  </Text>
                  <Link to="">
                     <Text mt="5" textAlign="center">
                        Buat Website Digital Anda dengan Mudah
                     </Text>
                  </Link>
               </Box>
               <Box textAlign="center" bg="white" p={5} borderRadius="10">
                  <Text mt="5" textAlign="center" fontWeight="semibold">
                     Indomie Sehat
                  </Text>
                  <Link to="">
                     <Text mt="5" textAlign="center">
                        Buat Website Digital Anda dengan Mudah
                     </Text>
                  </Link>
               </Box>
               <Box textAlign="center" bg="white" p={5} borderRadius="10">
                  <Text mt="5" textAlign="center" fontWeight="semibold">
                     Indomie Sehat
                  </Text>
                  <Link to="">
                     <Text mt="5" textAlign="center">
                        Buat Website Digital Anda dengan Mudah
                     </Text>
                  </Link>
               </Box>
            </SimpleGrid>
         </Container>
      </Box>
   );
};

export default MainProjects;
