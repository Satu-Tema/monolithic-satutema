import { useEffect, useMemo } from 'react';

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
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import type { SubmitHandler } from 'react-hook-form';
import { Controller, useForm, useFormState, useWatch } from 'react-hook-form';
import { IoAdd, IoClose } from 'react-icons/io5';
import { CategoryFormValues } from 'ts/schema/categorySchema';
import { CategoryFormSchema } from 'utils/schema/categorySchema';

const DashboardCreateNewCategory = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();

   const { register, handleSubmit, reset, control } = useForm<CategoryFormValues>({
      resolver: yupResolver(CategoryFormSchema),
   });
   const { errors } = useFormState({ control });

   const onModalClose = () => {
      onClose();
      reset();
   };

   return (
      <>
         <HStack>
            <Text fontSize="24" fontWeight="semibold">
               Kategori
            </Text>
            <Spacer />
            <Button
               rounded="md"
               leftIcon={<Icon as={IoAdd} fontSize="xl" />}
               variant="outline"
               onClick={onOpen}
               px="4"
               colorScheme="blue"
            >
               Tambah kategori baru
            </Button>
         </HStack>
         <Divider />
         <Modal isOpen={isOpen} onClose={onModalClose}>
            <ModalOverlay />
            <ModalContent>
               <Box as="form">
                  <ModalHeader>
                     <HStack>
                        <Text>Tambah Kategori Baru</Text>
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
                           <FormErrorMessage>
                              {errors.title && errors.title.message}
                           </FormErrorMessage>
                        </FormControl>
                     </VStack>
                  </ModalBody>
                  <ModalFooter gap={4}>
                     <Button variant="outline" colorScheme="blue" width={150} rounded="md">
                        Batal
                     </Button>
                     <Button colorScheme="blue" width={150} type="submit" rounded="md">
                        Tambah
                     </Button>
                  </ModalFooter>
               </Box>
            </ModalContent>
         </Modal>
      </>
   );
};

export default DashboardCreateNewCategory;
