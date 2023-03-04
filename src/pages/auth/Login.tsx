import React from 'react';
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
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import MainNavbarAuth from 'components/main/navbarauth';
import { LoginFormSchema } from 'utils/schema/authSchema';
import { LoginFormValues } from 'ts/schema/authSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux/es/exports';
// export interface RootState {
//    user: UserType;
//    // jenis state lainnya ...
// }

// export type UserType = {
//    id: number;
//    name: string;
//    email: string;
// };
const Login = () => {
   const user = useSelector((state: any) => state.user);
   console.log('nice', user);
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

   const onSubmit: SubmitHandler<LoginFormValues> = (data) => console.log(data);

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
                  <Button type="submit" w="full" colorScheme="blue" variant="solid">
                     Masuk
                  </Button>
               </form>
            </SimpleGrid>
         </Container>
      </Box>
   );
};

export default Login;
