import React, { useState } from 'react';
import {
   Box,
   // SimpleGrid,
   Container,
   FormControl,
   FormLabel,
   Input,
   Button,
   Grid,
   GridItem,
   FormErrorMessage,
   Textarea,
   useToast,
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import MainNavbarAuth from 'components/main/navbarauth';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateWebsiteFormValues } from 'ts/schema/createWebsiteSchema';
import { CreateWebsiteFormSchema } from 'utils/schema/createWebsiteSchema';
import axios from 'axios';
import { HOST } from 'utils/Host';
import { useNavigate } from 'react-router-dom';

const CreateWebsite = () => {
   const [loading, setLoading] = useState(false);
   const toast = useToast();
   const navigate = useNavigate();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<CreateWebsiteFormValues>({
      defaultValues: {
         address: '',
         description: '',
         meta: '',
         title: '',
      },
      resolver: yupResolver(CreateWebsiteFormSchema),
   });

   const onSubmit: SubmitHandler<CreateWebsiteFormValues> = (values) => {
      const obj = {
         options: {
            address: values.address,
            description: values.description,
            meta: values.meta,
         },
      };

      setLoading(true);

      axios
         .post(
            `${HOST as string}/user/website`,
            {
               theme_id: 3,
               website_name: values.title,
               content: JSON.stringify(obj),
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
               navigate('/user');
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
      <Box background="#fff">
         <MainNavbarAuth />
         <Container maxW="container.lg" mt={10}>
            <form onSubmit={handleSubmit(onSubmit)}>
               <Grid
                  h="300px"
                  templateRows="repeat(3, 1fr)"
                  templateColumns="repeat(5, 1fr)"
                  gap={4}
               >
                  <GridItem rowSpan={3} colSpan={2}>
                     <FormControl isRequired isInvalid={!!errors.title}>
                        <FormLabel>Judul Website</FormLabel>
                        <Input type="text" {...register('title')} />
                        <FormErrorMessage>{errors.title && errors.title.message}</FormErrorMessage>
                     </FormControl>
                     <FormControl mt={5} isRequired isInvalid={!!errors.description}>
                        <FormLabel>Deskripsi</FormLabel>
                        <Textarea rows={7} {...register('description')} />
                        <FormErrorMessage>
                           {errors.description && errors.description.message}
                        </FormErrorMessage>
                     </FormControl>
                  </GridItem>
                  <GridItem colSpan={3}>
                     <FormControl isRequired isInvalid={!!errors.address}>
                        <FormLabel>Alamat</FormLabel>
                        <Input type="text" {...register('address')} />
                        <FormErrorMessage>
                           {errors.address && errors.address.message}
                        </FormErrorMessage>
                     </FormControl>
                  </GridItem>
                  <GridItem colSpan={3}>
                     <FormControl isRequired isInvalid={!!errors.meta}>
                        <FormLabel>Meta Tag</FormLabel>
                        <Input type="text" {...register('meta')} />
                        <FormErrorMessage>{errors.meta && errors.meta.message}</FormErrorMessage>
                     </FormControl>
                  </GridItem>
                  {/* <GridItem colSpan={3}>
                     <FormControl isRequired isInvalid={!!errors.category}>
                        <FormLabel>Kategori</FormLabel>
                        <Input  type="text" {...register('category')} />
                        <FormErrorMessage>
                           {errors.category && errors.category.message}
                        </FormErrorMessage>
                     </FormControl>
                  </GridItem> */}
               </Grid>
               <Button
                  isLoading={loading}
                  mt={5}
                  type="submit"
                  w="full"
                  colorScheme="blue"
                  variant="solid"
               >
                  Buat Website
               </Button>
            </form>
         </Container>
      </Box>
   );
};

export default CreateWebsite;
