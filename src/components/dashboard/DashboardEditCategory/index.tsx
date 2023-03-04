import { useEffect, useState } from 'react';

import {
   Box,
   Button,
   Input,
   FormControl,
   FormLabel,
   FormErrorMessage,
   VStack,
   HStack,
   Spacer,
   IconButton,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalFooter,
   Text,
   useToast,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import type { SubmitHandler } from 'react-hook-form';
import { useForm, useFormState } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';
import { CategoryFormValues } from 'ts/schema/categorySchema';
import { CategoryFormSchema } from 'utils/schema/categorySchema';
import axios from 'axios';
import { HOST } from 'utils/Host';
import { mutate } from 'swr';
import { CategoryRemoteDataType } from 'ts/Category';

interface IDashboardEditCategory {
   editData: CategoryRemoteDataType;
   isOpen: boolean;
   onClose: () => void;
}
const DashboardEditCategory = ({ editData, isOpen, onClose }: IDashboardEditCategory) => {
   const [loading, setLoading] = useState(false);
   const toast = useToast();
   const { register, handleSubmit, reset, control } = useForm<CategoryFormValues>({
      resolver: yupResolver(CategoryFormSchema),
   });
   const { errors } = useFormState({ control });

   const onModalClose = () => {
      onClose();
      reset();
   };

   const onSubmit: SubmitHandler<CategoryFormValues> = (values) => {
      setLoading(true);
      axios
         .put(
            `${HOST as string}/admin/category/${editData.id}`,
            {
               title_category: values.title,
            },
            {
               headers: {
                  Authorization: `Bearer ${localStorage.getItem('xtoken') as string}`,
               },
            },
         )
         .then((data) => {
            setLoading(false);
            if (data && data.data.status) {
               mutate('/admin/category');
               onClose();
               reset();
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

   useEffect(() => {
      reset({
         title: editData.title_category,
      });
   }, [editData]);

   return (
      <Modal isOpen={isOpen} onClose={onModalClose}>
         <ModalOverlay />
         <ModalContent>
            <Box as="form">
               <ModalHeader>
                  <HStack>
                     <Text>Edit Kategori</Text>
                     <Spacer />
                     <IconButton
                        variant="outline"
                        aria-label="close modal"
                        icon={<IoClose />}
                        fontSize="xl"
                        onClick={onModalClose}
                        rounded="md"
                     />
                  </HStack>
               </ModalHeader>
               <ModalBody>
                  <VStack align="stretch">
                     <FormControl isRequired isInvalid={!!errors.title}>
                        <FormLabel>Judul Kategori</FormLabel>
                        <Input type="text" variant="outline" {...register('title')} />
                        <FormErrorMessage>{errors.title && errors.title.message}</FormErrorMessage>
                     </FormControl>
                  </VStack>
               </ModalBody>
               <ModalFooter gap={4}>
                  <Button
                     onClick={onModalClose}
                     variant="outline"
                     colorScheme="blue"
                     width={150}
                     rounded="md"
                  >
                     Batal
                  </Button>
                  <Button
                     onClick={handleSubmit(onSubmit)}
                     colorScheme="blue"
                     width={150}
                     type="submit"
                     rounded="md"
                     isLoading={loading}
                  >
                     Edit
                  </Button>
               </ModalFooter>
            </Box>
         </ModalContent>
      </Modal>
   );
};

export default DashboardEditCategory;
