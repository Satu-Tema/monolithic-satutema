import {
   Box,
   Container,
   VStack,
   Heading,
   useColorModeValue,
   Image,
   Table,
   Thead,
   Tr,
   Th,
   Tbody,
   HStack,
   Button,
   Spacer,
   Icon,
   TableContainer,
   Td,
   Avatar,
} from '@chakra-ui/react';
import DashboardCreateNewGallery from 'components/dashboard/DashboardCreateNewGallery';
import DashboardCreateNewProduct from 'components/dashboard/DashboardCreateNewProduct';
import DashboardLayoutUser from 'components/dashboard/DashboardLayoutUser';
import useRemoteWebsite from 'hooks/remote/useRemoteWebsite';
import { IoAdd } from 'react-icons/io5';

const ProductDashboard = () => {
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
               <DashboardCreateNewProduct />
               {/* <Box display="flex" flexWrap="wrap">
                  <DashboardCreateNewGallery />
               </Box> */}
               <TableContainer>
                  <Table variant="striped" mt={5}>
                     <Thead>
                        <Tr fontSize="lg">
                           <Th>Nama Produk</Th>
                           <Th>Deskripsi</Th>
                           <Th>Gambar</Th>
                           <Th textAlign="center">Aksi</Th>
                        </Tr>
                     </Thead>
                     <Tbody>
                        {parseObj?.product?.map((el: any, index: number) => (
                           <Tr key={index}>
                              <Td>{el.title}</Td>
                              <Td>{el.description}</Td>
                              <Td>
                                 <Avatar name={el.tile} src={el.imageProduct} />
                              </Td>
                              <Td>
                                 <Button colorScheme="red">Hapus</Button>
                              </Td>
                           </Tr>
                        ))}
                     </Tbody>
                  </Table>
               </TableContainer>
            </Container>
         </VStack>
      </DashboardLayoutUser>
   );
};

export default ProductDashboard;
