import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ThemeEditor = () => {
   const navigate = useNavigate();
   return (
      <Box m={6}>
         <Flex
            flexWrap={{ base: 'wrap', md: 'initial' }}
            gap={10}
            mb={5}
            justifyContent="center"
            alignItems="center"
            alignContent="center"
         >
            <Button
               onClick={() => navigate('/admin/theme')}
               colorScheme="blue"
               variant="outline"
               minW={{ base: 'full', md: '20%' }}
            >
               Kembali
            </Button>

            <Button colorScheme="blue" variant="outline" w="full">
               Simpan
            </Button>
         </Flex>
         <Flex
            flexWrap={{ base: 'wrap', md: 'initial' }}
            justifyContent="center"
            alignItems="center"
            alignContent="center"
         >
            <Box
               // display={{ base: 'none', md: 'block' }}
               as="aside"
               transitionProperty="min-width, width"
               transitionDuration="ultra-slow"
               minH="80vh"
               minW={{
                  base: 'full',
                  md: '20%',
               }}
               borderRadius={10}
               border="1px solid #127CA6"
               p={3}
            >
               <Box>
                  <Heading fontWeight={500} fontSize="md">
                     Navbar
                  </Heading>
                  <Box p={3} rounded="10" color="white" my={3} backgroundColor="#127CA6">
                     <Text>Navbar 1 - UMKM</Text>
                  </Box>
                  <Box p={3} rounded="10" color="white" my={3} backgroundColor="#127CA6">
                     <Text>Navbar 2 - UMKM</Text>
                  </Box>
                  <Box p={3} rounded="10" color="white" my={3} backgroundColor="#127CA6">
                     <Text>Navbar 3 - UMKM</Text>
                  </Box>
               </Box>
            </Box>
            <Box
               minW={{
                  base: 'full',
                  md: '80%',
               }}
               textAlign="center"
            >
               <Heading color="rgba(0, 0, 0, 0.4)">Tambah Section</Heading>
            </Box>
         </Flex>
      </Box>
   );
};

export default ThemeEditor;
