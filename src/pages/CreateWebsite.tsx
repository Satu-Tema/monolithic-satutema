import React from 'react';
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
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import MainNavbarAuth from 'components/main/navbarauth';
import { LoginFormSchema } from 'utils/schema/authSchema';
import { LoginFormValues } from 'ts/schema/authSchema';
import { yupResolver } from '@hookform/resolvers/yup';

const CreateWebsite = () => {
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
         <Container maxW="container.lg" mt={10}>
            <form onSubmit={handleSubmit(onSubmit)}>
               {/* <SimpleGrid
                  columns={{ sm: 1, md: 2 }}
                  gap={5}
                  mt={20}
                  mb={20}
                  minHeight="50vh"
                  //   pt={10}
               >
                  <FormControl isRequired isInvalid={!!errors.email}>
                     <FormLabel>Judul Website</FormLabel>
                     <Input type="email" {...register('email')} />
                     <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                  </FormControl>
                  <FormControl isRequired isInvalid={!!errors.password}>
                     <FormLabel>Alamat</FormLabel>
                     <Input type="password" {...register('password')} />
                     <FormErrorMessage>
                        {errors.password && errors.password.message}
                     </FormErrorMessage>
                  </FormControl>
                  <FormControl isRequired isInvalid={!!errors.password}>
                     <FormLabel>Alamat</FormLabel>
                     <Input type="password" {...register('password')} />
                     <FormErrorMessage>
                        {errors.password && errors.password.message}
                     </FormErrorMessage>
                  </FormControl>
                  <FormControl isRequired isInvalid={!!errors.password}>
                     <FormLabel>Alamat</FormLabel>
                     <Input type="password" {...register('password')} />
                     <FormErrorMessage>
                        {errors.password && errors.password.message}
                     </FormErrorMessage>
                  </FormControl>
               </SimpleGrid> */}

               <Grid
                  h="300px"
                  templateRows="repeat(3, 1fr)"
                  templateColumns="repeat(5, 1fr)"
                  gap={4}
               >
                  <GridItem rowSpan={3} colSpan={2}>
                     <FormControl isRequired isInvalid={!!errors.email}>
                        <FormLabel>Judul Website</FormLabel>
                        <Input type="email" {...register('email')} />
                        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                     </FormControl>
                     <FormControl mt={5} isRequired isInvalid={!!errors.email}>
                        <FormLabel>Deskripsi</FormLabel>
                        <Textarea rows={7} {...register('email')} />
                        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                     </FormControl>
                  </GridItem>
                  <GridItem colSpan={3}>
                     <FormControl isRequired isInvalid={!!errors.email}>
                        <FormLabel>Alamat</FormLabel>
                        <Input type="email" {...register('email')} />
                        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                     </FormControl>
                  </GridItem>
                  <GridItem colSpan={3}>
                     <FormControl isRequired isInvalid={!!errors.email}>
                        <FormLabel>Meta Tag</FormLabel>
                        <Input type="email" {...register('email')} />
                        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                     </FormControl>
                  </GridItem>
                  <GridItem colSpan={3}>
                     <FormControl isRequired isInvalid={!!errors.email}>
                        <FormLabel>Kategori</FormLabel>
                        <Input type="email" {...register('email')} />
                        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                     </FormControl>
                  </GridItem>
               </Grid>
               <Button mt={5} type="submit" w="full" colorScheme="blue" variant="solid">
                  Buat Website
               </Button>
            </form>
         </Container>
      </Box>
   );
};

export default CreateWebsite;
