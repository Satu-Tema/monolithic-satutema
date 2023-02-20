import { Box, Center, Container, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const MainWebsiteChooser = () => {
   return (
      <Box p={10} minH="80vh" backgroundImage="./images/bgconcrete.png">
         <Container maxW="container.lg">
            <Heading textAlign="center" mt={20} fontWeight={500}>
               Kenapa Menggunakan SatuTema?
            </Heading>
            <Flex mt={30} justify="space-between">
               <Box textAlign="center">
                  <Center>
                     <img src="./images/store.png" alt="store" width={200} />
                  </Center>
                  <Text mt="5" textAlign="center">
                     Buat Website Digital Anda dengan Mudah
                  </Text>
               </Box>
               <Box textAlign="center">
                  <Center>
                     <img src="./images/dolar.png" alt="dolar" width={200} />
                  </Center>
                  <Text mt="5" textAlign="center">
                     Buat Website Mulai dari Rp. 0
                  </Text>
               </Box>
               <Box textAlign="center">
                  <Center>
                     <img
                        src="./images/pengguna.png"
                        alt="store"
                        style={{ objectFit: 'cover' }}
                        width={200}
                     />
                  </Center>
                  <Text mt="5" textAlign="center">
                     Untuk Semua Pengguna dan Desain Terbaru
                  </Text>
               </Box>
            </Flex>
         </Container>
      </Box>
   );
};

export default MainWebsiteChooser;
