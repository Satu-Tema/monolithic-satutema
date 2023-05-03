import {
   Card,
   CardBody,
   VStack,
   Text,
   Flex,
   Box,
   Button,
   SimpleGrid,
   useDisclosure,
   useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import DashboardCreateNewCategory from 'components/dashboard/DashboardCreateNewCategory';
import DashboardEditCategory from 'components/dashboard/DashboardEditCategory';
import DashboardLayout from 'components/dashboard/DashboardLayout';
import ModalWarning from 'components/dashboard/DashboardModalWarning';
import useRemoteCategory from 'hooks/remote/useRemoteCategory';
import { useState } from 'react';
import { mutate } from 'swr';
import { CategoryRemoteDataType } from 'ts/Category';
import { HOST } from 'utils/Host';

const Categories = () => {
   const toast = useToast();
   const [editData, setEditData] = useState<CategoryRemoteDataType>({
      id: '0',
      title_category: '',
   });
   const [deleteData, setDeleteData] = useState<CategoryRemoteDataType>({
      id: '0',
      title_category: '',
   });
   const [loading, setLoading] = useState(false);
   const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure();
   const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();
   const { data } = useRemoteCategory();

   const onHandleOpenEdit = (data: CategoryRemoteDataType) => {
      onOpenEdit();
      setEditData(data);
   };

   const onHandleOpenDelete = (data: CategoryRemoteDataType) => {
      onOpenDelete();
      setDeleteData(data);
   };

   const onDelete = () => {
      setLoading(true);
      axios
         .delete(`${HOST as string}/admin/category/${deleteData.id}`, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('xtoken') as string}`,
            },
         })
         .then((data) => {
            setLoading(false);
            if (data && data.data.status) {
               mutate('/admin/category');
               onCloseDelete();
               toast({
                  title: 'Sukses',
                  description: data.data.message,
                  status: 'success',
                  isClosable: true,
                  position: 'bottom',
               });
            } else {
               toast({
                  title: 'Terjadi Kesalahan',
                  description: data.data.message,
                  status: 'error',
                  isClosable: true,
                  position: 'top-right',
               });
            }
         })
         .catch((err) => {
            setLoading(false);
            if (err === 'ECONNABORTED') {
               toast({
                  title: 'Terjadi Kesalahan',
                  description:
                     ' Tidak dapat menjangkau Server, Periksa koneksi anda dan ulangi beberapa saat lagi.',
                  status: 'error',
                  isClosable: true,
                  position: 'top-right',
               });
            } else {
               toast({
                  title: 'Terjadi Kesalahan',
                  description: err.response.data.message,
                  status: 'error',
                  duration: 9000,
                  isClosable: true,
                  position: 'top-right',
               });
            }
         });
   };

   return (
      <DashboardLayout sidebarFor="admin">
         <VStack align="stretch" py="6" px="10" spacing="6">
            <DashboardCreateNewCategory />
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={5} mt={10}>
               {data?.map((el) => (
                  <Card key={el.id}>
                     <CardBody>
                        <Flex alignItems="center" justify="space-between">
                           <Text>{el.title_category}</Text>
                           <Box>
                              <Button
                                 onClick={() => onHandleOpenEdit(el)}
                                 colorScheme="blue"
                                 mr={2}
                              >
                                 Edit
                              </Button>
                              <Button colorScheme="red" onClick={() => onHandleOpenDelete(el)}>
                                 Delete
                              </Button>
                           </Box>
                        </Flex>
                     </CardBody>
                  </Card>
               ))}
            </SimpleGrid>
            <DashboardEditCategory editData={editData} isOpen={isOpenEdit} onClose={onCloseEdit} />
            <ModalWarning
               buttonText="Hapus"
               isOpen={isOpenDelete}
               onClose={onCloseDelete}
               buttonOnClick={onDelete}
               isLoading={loading}
            >
               Apakah Anda yakin ingin menghapus kategori {deleteData.title_category}?
            </ModalWarning>
         </VStack>
      </DashboardLayout>
   );
};

export default Categories;
