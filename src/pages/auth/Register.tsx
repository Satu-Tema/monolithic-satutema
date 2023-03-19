import React, { useState } from 'react';
import {
   Box,
   SimpleGrid,
   Container,
   FormControl,
   FormLabel,
   Input,
   Button,
   FormErrorMessage,
   Center,
   useToast,
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import MainNavbarAuth from 'components/main/navbarauth';
import { LoginFormSchema } from 'utils/schema/authSchema';
import { LoginFormValues } from 'ts/schema/authSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { HOST } from 'utils/Host';
import { useDispatch } from 'react-redux';
import { login } from 'redux/userSlice';

const Register = () => {
   const dispatch = useDispatch();
   const toast = useToast();
   const navigate = useNavigate();
   const [loading, setLoading] = useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<LoginFormValues>({
      defaultValues: {
         email: '',
         password: '',
      },
      resolver: yupResolver(LoginFormSchema),
   });

   const onSubmit: SubmitHandler<LoginFormValues> = (values) => {
      setLoading(true);
      axios
         .post(
            `${HOST as string}/auth/register`,
            {
               email: values.email,
               password: values.password,
            },
            { timeout: 1000 * 60 },
         )
         .then((data) => {
            setLoading(false);
            if (data && data.data.status) {
               dispatch(login(data.data.results.payload));
               navigate('/auth/register/create');
            } else {
               toast({
                  title: 'Terjadi Kesalahan',
                  description: data.data.message,
                  status: 'error',
                  duration: 9000,
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
                  duration: 9000,
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
         <Container maxW="container.lg">
            <SimpleGrid columns={{ sm: 1, md: 2 }} gap={5} mt={20} mb={20} minHeight="50vh" pt={10}>
               <Center>
                  <img
                     src={`${process.env.PUBLIC_URL}/images/monitor.png`}
                     alt="Satu Tema"
                     width="387"
                     height="477"
                  />
               </Center>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <FormControl isRequired isInvalid={!!errors.email}>
                     <FormLabel>Email</FormLabel>
                     <Input type="email" {...register('email')} />
                     <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                  </FormControl>
                  <FormControl isRequired isInvalid={!!errors.password} mt={5} mb={10}>
                     <FormLabel>Password</FormLabel>
                     <Input type="password" {...register('password')} />
                     <FormErrorMessage>
                        {errors.password && errors.password.message}
                     </FormErrorMessage>
                  </FormControl>
                  <Button
                     isLoading={loading}
                     type="submit"
                     w="full"
                     colorScheme="blue"
                     variant="solid"
                  >
                     Daftar
                  </Button>
               </form>
            </SimpleGrid>
         </Container>
      </Box>
   );
};

export default Register;
