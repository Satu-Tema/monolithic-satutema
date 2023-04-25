import {
   Box,
   Button,
   Container,
   VStack,
   Text,
   Center,
   Flex,
   Icon,
   FormControl,
   FormLabel,
   Input,
   FormErrorMessage,
   Heading,
   useColorModeValue,
   useToast,
   Table,
   Thead,
   Tr,
   Th,
   Tbody,
   Td,
   Textarea,
   Avatar,
   TableContainer,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import DashboardLayoutUser from 'components/dashboard/DashboardLayoutUser';
import useRemoteWebsite from 'hooks/remote/useRemoteWebsite';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm, useFormState } from 'react-hook-form';
import { mutate } from 'swr';
import { TestimonyFormValues } from 'ts/schema/testimonySchema';
import { HOST } from 'utils/Host';
import { TestimonyFormSchema } from 'utils/schema/testimonySchema';

const TestimonyDashboard = () => {
   const toast = useToast();
   const [image, setImage] = useState<string | Blob>();
   const { data } = useRemoteWebsite();

   const parseObj = data && JSON.parse(data?.content as string);

   const { register, handleSubmit, control, reset } = useForm<TestimonyFormValues>({
      resolver: yupResolver(TestimonyFormSchema),
   });
   const { errors } = useFormState({ control });

   const [loading, setLoading] = useState(false);

   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (e.target.files && e.target.files.length > 0) {
         setImage(e.target.files[0]);
      } else {
         setImage(undefined);
      }
   };

   const onSubmit: SubmitHandler<TestimonyFormValues> = (values) => {
      setLoading(true);
      const obj = {
         ...parseObj,
         testimony: [
            ...parseObj.testimony,
            {
               name: values.name,
               jobs: values.jobs,
               description: values.description,
               imageTestimony: '',
            },
         ],
      };
      const formData = new FormData();
      if (image) {
         formData.append('file', image);
         formData.append('content', JSON.stringify(obj));
      }

      axios
         .put(`${HOST as string}/user/website/testimony`, formData, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('xtoken') as string}`,
            },
         })
         .then((data) => {
            setLoading(false);
            reset();
            setImage('');
            if (data && data.data.status) {
               mutate('/user/website');
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
                  Testimoni
               </Heading>
               <VStack align="stretch" mb={5}>
                  <FormControl>
                     <FormLabel>Foto</FormLabel>
                     <Input onChange={handleImageChange} type="file" pt={1} variant="outline" />
                  </FormControl>
               </VStack>
               <VStack align="stretch" mb={5}>
                  <FormControl isInvalid={!!errors.name}>
                     <FormLabel>Nama</FormLabel>
                     <Input type="text" variant="outline" {...register('name')} />
                     <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                  </FormControl>
               </VStack>
               <VStack align="stretch" mb={5}>
                  <FormControl isInvalid={!!errors.jobs}>
                     <FormLabel>Pekerjaan</FormLabel>
                     <Input type="text" variant="outline" {...register('jobs')} />
                     <FormErrorMessage>{errors.jobs && errors.jobs.message}</FormErrorMessage>
                  </FormControl>
               </VStack>
               <VStack align="stretch" mb={5}>
                  <FormControl isInvalid={!!errors.description}>
                     <FormLabel>Deskripsi</FormLabel>
                     <Textarea size="md" variant="outline" {...register('description')} />
                     <FormErrorMessage>
                        {errors.description && errors.description.message}
                     </FormErrorMessage>
                  </FormControl>
               </VStack>

               <VStack align="stretch">
                  <Button isLoading={loading} onClick={handleSubmit(onSubmit)} colorScheme="blue">
                     Simpan
                  </Button>
               </VStack>
               <TableContainer>
                  <Table variant="striped" mt={5}>
                     <Thead>
                        <Tr fontSize="lg">
                           <Th>Foto</Th>
                           <Th>Nama</Th>
                           <Th>Pekerjaan</Th>
                           <Th>Deskripsi</Th>
                           <Th textAlign="center">Aksi</Th>
                        </Tr>
                     </Thead>
                     <Tbody>
                        {parseObj?.testimony?.map((el: any, index: number) => (
                           <Tr key={index}>
                              <Td>
                                 <Avatar name={el.name} src={el.imageTestimony} />
                              </Td>
                              <Td>{el.name}</Td>
                              <Td>{el.jobs}</Td>
                              <Td>{el.description}</Td>
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

export default TestimonyDashboard;
