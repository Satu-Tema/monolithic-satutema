import { Box, Container, VStack, Heading, useColorModeValue, Image } from '@chakra-ui/react';
import DashboardCreateNewGallery from 'components/dashboard/DashboardCreateNewGallery';
import DashboardLayoutUser from 'components/dashboard/DashboardLayoutUser';
import useRemoteWebsite from 'hooks/remote/useRemoteWebsite';

const GalleryDashboard = () => {
   const { data } = useRemoteWebsite();

   const parseObj = data && JSON.parse(data?.content as string);

   return (
      <DashboardLayoutUser sidebarFor="user">
         <VStack align="stretch" py="4">
            <Container
               maxW="container.lg"
               border="1px solid rgba(18, 18, 18, 0.13)"
               borderRadius={10}
               p={10}
            >
               <Heading
                  fontFamily={'Work Sans'}
                  fontWeight={'bold'}
                  color={useColorModeValue('gray.700', 'gray.50')}
                  textAlign="center"
                  my={6}
               >
                  Galeri
               </Heading>

               <Box display="flex" flexWrap="wrap">
                  <DashboardCreateNewGallery />
                  {parseObj?.gallery?.map((el: string, index: number) => (
                     <Box
                        data-testid="gallery"
                        key={index}
                        w="50%"
                        p={{ base: 1, md: 2 }}
                        cursor="pointer"
                     >
                        <Image
                           // pb={{ base: '5.5vw', ts: '4.5vw', sm: '2vw' }}
                           w="100%"
                           // minW={150}
                           // maxW={150}
                           src={el}
                           alt="sdfsdf"
                        />
                     </Box>
                  ))}
               </Box>
            </Container>
         </VStack>
      </DashboardLayoutUser>
   );
};

export default GalleryDashboard;
