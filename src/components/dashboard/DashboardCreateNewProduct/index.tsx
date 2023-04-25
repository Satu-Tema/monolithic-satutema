import { useEffect, useMemo, useState } from 'react';

import {
   Box,
   Button,
   Input,
   FormControl,
   FormLabel,
   FormErrorMessage,
   FormHelperText,
   VStack,
   HStack,
   Spacer,
   Icon,
   IconButton,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalFooter,
   Text,
   useDisclosure,
   Divider,
   useToast,
   Heading,
   useColorModeValue,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import type { SubmitHandler } from 'react-hook-form';
import { Controller, useForm, useFormState, useWatch } from 'react-hook-form';
import { IoAdd, IoClose } from 'react-icons/io5';
import { CategoryFormValues } from 'ts/schema/categorySchema';
import { CategoryFormSchema } from 'utils/schema/categorySchema';
import axios from 'axios';
import { HOST } from 'utils/Host';
import { mutate } from 'swr';
import { ProductFormValues } from 'ts/schema/productSchema';
import { ProductFormSchema } from 'utils/schema/productSchema';
import useRemoteWebsite from 'hooks/remote/useRemoteWebsite';

const DashboardCreateNewProduct = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [loading, setLoading] = useState(false);
   const [image, setImage] = useState<string | Blob>();
   const toast = useToast();
   const { register, handleSubmit, reset, control } = useForm<ProductFormValues>({
      resolver: yupResolver(ProductFormSchema),
   });
   const { errors } = useFormState({ control });
   const { data } = useRemoteWebsite();

   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (e.target.files && e.target.files.length > 0) {
         setImage(e.target.files[0]);
      } else {
         setImage(undefined);
      }
   };

   const parseObj = data && JSON.parse(data.content as string);
   console.log(parseObj && parseObj);
   const onModalClose = () => {
      onClose();
      reset();
   };

   const onSubmit: SubmitHandler<ProductFormValues> = (values) => {
      setLoading(true);
      let obj = {};
      if (parseObj?.product) {
         obj = {
            ...parseObj,
            product: [
               ...parseObj?.product,
               {
                  title: values.title,
                  description: values.description,
                  imageProduct: '',
               },
            ],
         };
      } else {
         obj = {
            ...parseObj,
            product: [
               {
                  title: values.title,
                  description: values.description,
                  imageProduct: '',
               },
            ],
         };
      }

      const formData = new FormData();
      if (image) {
         formData.append('file', image);
         formData.append('content', JSON.stringify(obj));
      }

      axios
         .put(`${HOST as string}/user/website/product`, formData, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('xtoken') as string}`,
            },
         })
         .then((data) => {
            setLoading(false);
            reset();
            if (data && data.data.status) {
               mutate('/user/website');
               onClose();
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
      <>
         <HStack>
            <Heading
               fontFamily={'Work Sans'}
               fontWeight={'bold'}
               color={useColorModeValue('gray.700', 'gray.50')}
               //   textAlign="center"
               my={6}
            >
               Produk
            </Heading>
            <Spacer />
            <Button
               rounded="md"
               leftIcon={<Icon as={IoAdd} fontSize="xl" />}
               variant="outline"
               onClick={onOpen}
               px="4"
               colorScheme="blue"
            >
               Tambah Produk baru
            </Button>
         </HStack>
         <Divider />
         <Modal isOpen={isOpen} onClose={onModalClose}>
            <ModalOverlay />
            <ModalContent>
               <Box as="form">
                  <ModalHeader>
                     <HStack>
                        <Text>Tambah Produk Baru</Text>
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
                        <FormControl>
                           <FormLabel>Foto Produk</FormLabel>
                           <Input
                              // pb={2}
                              type="file"
                              accept="image/*"
                              variant="outline"
                              onChange={handleImageChange}
                           />
                        </FormControl>
                     </VStack>
                     <VStack align="stretch">
                        <FormControl isRequired isInvalid={!!errors.title}>
                           <FormLabel>Nama Produk</FormLabel>
                           <Input type="text" variant="outline" {...register('title')} />
                           <FormErrorMessage>
                              {errors.title && errors.title.message}
                           </FormErrorMessage>
                        </FormControl>
                     </VStack>
                     <VStack align="stretch">
                        <FormControl isRequired isInvalid={!!errors.title}>
                           <FormLabel>Deskripsi</FormLabel>
                           <Input type="text" variant="outline" {...register('description')} />
                           <FormErrorMessage>
                              {errors.description && errors.description.message}
                           </FormErrorMessage>
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
                        Tambah
                     </Button>
                  </ModalFooter>
               </Box>
            </ModalContent>
         </Modal>
      </>
   );
};

export default DashboardCreateNewProduct;
