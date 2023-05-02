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
   Center,
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
import { TfiGallery } from 'react-icons/tfi';
import useRemoteWebsite from 'hooks/remote/useRemoteWebsite';

const DashboardCreateNewGallery = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const { data } = useRemoteWebsite();
   const [loading, setLoading] = useState(false);
   const [image, setImage] = useState<string | Blob>();
   const [fileImg, setFileImg] = useState('');

   const toast = useToast();

   const parseObj = data && JSON.parse(data?.content as string);
   console.log(parseObj?.gallery);

   const onModalClose = () => {
      onClose();
   };

   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (e.target.files && e.target.files.length > 0) {
         setImage(e.target.files[0]);
      } else {
         setImage(undefined);
      }
   };

   const onSubmit = () => {
      setLoading(true);

      const formData = new FormData();
      if (image) {
         formData.append('file', image);
         formData.append('content', JSON.stringify(parseObj));
      }

      axios
         .put(`${HOST as string}/user/website/gallery`, formData, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('xtoken') as string}`,
            },
         })
         .then((data) => {
            setLoading(false);
            if (data && data.data.status) {
               mutate('/user/website');
               onModalClose();
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
                  position: 'bottom',
               });
            }
         });
   };

   return (
      <>
         <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            w="100%"
            p={{ base: 1, md: 2 }}
            cursor="pointer"
            rounded="md"
            transition="all"
            height={200}
            mb={5}
            transitionDuration="300px"
            _hover={{
               border: '3px solid rgb(241 245 249)',
               transform: 'scale(1.05)',
            }}
            onClick={onOpen}
            data-testid="button-open-modal"
         >
            <Box>
               <Center>
                  <TfiGallery fontSize={25} />
               </Center>
               <Text mt={6}>Klik untuk menambah Foto Galeri</Text>
            </Box>
         </Box>

         <Divider />
         <Modal size="xl" isOpen={isOpen} onClose={onModalClose}>
            <ModalOverlay />
            <ModalContent>
               <Box as="form">
                  <ModalHeader>
                     <HStack>
                        <Text>Tambah Foto Galeri Baru</Text>
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
                        <FormControl isRequired>
                           {/* <FormLabel>Gambar</FormLabel> */}
                           <Input
                              onChange={handleImageChange}
                              type="file"
                              pt={1}
                              variant="outline"
                              data-testid="file-input"
                           />
                           <FormHelperText>
                              klik chose file untuk memilih gambar gallery
                           </FormHelperText>
                           {/* <FormErrorMessage> */}
                           {/* {errors.title && errors.title.message} */}
                           {/* </FormErrorMessage> */}
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
                        onClick={onSubmit}
                        colorScheme="blue"
                        width={150}
                        type="submit"
                        rounded="md"
                        isLoading={loading}
                        data-testid="add-gallery-button"
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

export default DashboardCreateNewGallery;
