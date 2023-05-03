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
   Select,
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
import useRemoteCategoryOption from 'hooks/remote/useRemoteCategoryOption';
import { ThemeFormValues } from 'ts/schema/themeSchema';
import { ThemeRemoteDataType } from 'ts/Theme';

const DashboardCreateNewTheme = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [loading, setLoading] = useState(false);
   const toast = useToast();
   const { register, handleSubmit, reset, control } = useForm<ThemeFormValues>({
      resolver: yupResolver(CategoryFormSchema),
   });
   const { errors } = useFormState({ control });

   const { data } = useRemoteCategoryOption();

   const onModalClose = () => {
      onClose();
      reset();
   };

   const onSubmit: SubmitHandler<ThemeFormValues> = (values) => {
      console.log(values);
      setLoading(true);
      axios
         .post(
            `${HOST as string}/admin/theme/themename`,
            {
               theme_name: values.title,
               category: values.category,
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
               mutate('/theme');
               onClose();
               setTimeout(() => {
                  reset();
               }, 1000);
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
            <Text fontSize="24" fontWeight="semibold">
               Tema
            </Text>
            <Spacer />
            <Button
               rounded="md"
               leftIcon={<Icon as={IoAdd} fontSize="xl" />}
               variant="outline"
               onClick={onOpen}
               px="4"
               colorScheme="blue"
               data-testid="open-modal-theme"
            >
               Tambah Tema baru
            </Button>
         </HStack>
         <Divider />
         <Modal isOpen={isOpen} onClose={onModalClose}>
            <ModalOverlay />
            <ModalContent>
               <Box as="form">
                  <ModalHeader>
                     <HStack>
                        <Text>Tambah Tema Baru</Text>
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
                           <FormLabel>Judul Tema</FormLabel>
                           <Input type="text" variant="outline" {...register('title')} />
                           <FormErrorMessage>
                              {errors.title && errors.title.message}
                           </FormErrorMessage>
                        </FormControl>
                        <FormControl isRequired isInvalid={!!errors.category}>
                           <FormLabel>Kategori</FormLabel>
                           <Select {...register('category')} textTransform="capitalize">
                              {data?.map((el, i) => (
                                 <option key={i} value={el.value}>
                                    {el.label}
                                 </option>
                              ))}
                           </Select>
                           <FormErrorMessage>
                              {errors.category && errors.category.message}
                           </FormErrorMessage>
                        </FormControl>
                     </VStack>
                  </ModalBody>
                  <ModalFooter gap={4}>
                     <Button
                        onClick={onClose}
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
                        data-testid="button-add-theme"
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

export default DashboardCreateNewTheme;
