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
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import DashboardLayoutUser from 'components/dashboard/DashboardLayoutUser';
import useRemoteWebsite from 'hooks/remote/useRemoteWebsite';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm, useFormState } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { mutate } from 'swr';
import { SettingFormValues } from 'ts/schema/settingSchema';
import { HOST } from 'utils/Host';
import { SettingFormSchema } from 'utils/schema/settingSchema';

const SettingDashboard = () => {
   const navigate = useNavigate();
   const toast = useToast();
   const { data } = useRemoteWebsite();

   const parseObj = data && JSON.parse(data?.content as string);

   const { register, handleSubmit, control, setValue } = useForm<SettingFormValues>({
      resolver: yupResolver(SettingFormSchema),
   });
   const { errors } = useFormState({ control });

   const [loading, setLoading] = useState(false);
   const [image, setImage] = useState<string | Blob>();
   const [fileImg, setFileImg] = useState('');

   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (e.target.files && e.target.files.length > 0) {
         setImage(e.target.files[0]);
      } else {
         setImage(undefined);
      }
   };

   const onEditSetting: SubmitHandler<SettingFormValues> = (values) => {
      setLoading(true);
      const obj = {
         ...parseObj,
         options: {
            description: values.description,
            address: values.address,
            meta: values.meta,
            youtube: values.youtube,
            twitter: values.twitter,
            instagram: values.instagram,
            titleHero: values.titleHero,
            descriptionHero: values.descriptionHero,
         },
      };

      const formData = new FormData();
      if (image) {
         formData.append('file', image);
         formData.append('website_name', values.title);
         formData.append('content', JSON.stringify(obj));
      }

      axios
         .put(`${HOST as string}/user/website/hero`, formData, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('xtoken') as string}`,
            },
         })
         .then((data) => {
            setLoading(false);
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

   useEffect(() => {
      if (data) {
         setValue('title', data.website_name);
         setValue('description', parseObj?.options?.description);
         setValue('address', parseObj?.options?.address);
         setValue('meta', parseObj?.options?.meta);
         setValue('instagram', parseObj?.options?.instagram);
         setValue('youtube', parseObj?.options?.youtube);
         setValue('twitter', parseObj?.options?.twitter);
         setValue('titleHero', parseObj?.options?.titleHero);
         setValue('descriptionHero', parseObj?.options?.descriptionHero);
         setFileImg(parseObj?.options?.imageHero);
      }
   }, [data]);
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
                  Pengaturan Website
               </Heading>
               <VStack align="stretch" mb={5}>
                  <FormControl isInvalid={!!errors.title}>
                     <FormLabel>Judul Website</FormLabel>
                     <Input type="text" variant="outline" {...register('title')} />
                     <FormErrorMessage>{errors.title && errors.title.message}</FormErrorMessage>
                  </FormControl>
               </VStack>
               <VStack align="stretch" mb={5}>
                  <FormControl isInvalid={!!errors.description}>
                     <FormLabel>Deskripsi</FormLabel>
                     <Input type="text" variant="outline" {...register('description')} />
                     <FormErrorMessage>
                        {errors.description && errors.description.message}
                     </FormErrorMessage>
                  </FormControl>
               </VStack>
               <VStack align="stretch" mb={5}>
                  <FormControl isInvalid={!!errors.address}>
                     <FormLabel>Alamat UMKM</FormLabel>
                     <Input type="text" variant="outline" {...register('address')} />
                     <FormErrorMessage>{errors.address && errors.address.message}</FormErrorMessage>
                  </FormControl>
               </VStack>
               <VStack align="stretch" mb={5}>
                  <FormControl isInvalid={!!errors.youtube}>
                     <FormLabel>Youtube</FormLabel>
                     <Input type="text" variant="outline" {...register('youtube')} />
                     <FormErrorMessage>{errors.youtube && errors.youtube.message}</FormErrorMessage>
                  </FormControl>
               </VStack>
               <VStack align="stretch" mb={5}>
                  <FormControl isInvalid={!!errors.twitter}>
                     <FormLabel>Twitter</FormLabel>
                     <Input type="text" variant="outline" {...register('twitter')} />
                     <FormErrorMessage>{errors.twitter && errors.twitter.message}</FormErrorMessage>
                  </FormControl>
               </VStack>
               <VStack align="stretch" mb={5}>
                  <FormControl isInvalid={!!errors.instagram}>
                     <FormLabel>Instagram</FormLabel>
                     <Input type="text" variant="outline" {...register('instagram')} />
                     <FormErrorMessage>
                        {errors.instagram && errors.instagram.message}
                     </FormErrorMessage>
                  </FormControl>
               </VStack>
               <VStack align="stretch" mb={5}>
                  <FormControl isInvalid={!!errors.meta}>
                     <FormLabel>Meta</FormLabel>
                     <Input type="text" variant="outline" {...register('meta')} />
                     <FormErrorMessage>{errors.meta && errors.meta.message}</FormErrorMessage>
                  </FormControl>
               </VStack>

               <Heading
                  fontFamily={'Work Sans'}
                  fontWeight={'bold'}
                  color={useColorModeValue('gray.700', 'gray.50')}
                  textAlign="center"
                  my={6}
               >
                  Hero
               </Heading>
               <VStack align="stretch" mb={5}>
                  <FormControl isInvalid={!!errors.titleHero}>
                     <FormLabel>Judul Hero</FormLabel>
                     <Input type="text" variant="outline" {...register('titleHero')} />
                     <FormErrorMessage>
                        {errors.titleHero && errors.titleHero.message}
                     </FormErrorMessage>
                  </FormControl>
               </VStack>
               <VStack align="stretch" mb={5}>
                  <FormControl isInvalid={!!errors.descriptionHero}>
                     <FormLabel>Deskripsi</FormLabel>
                     <Input type="text" variant="outline" {...register('descriptionHero')} />
                     <FormErrorMessage>
                        {errors.descriptionHero && errors.descriptionHero.message}
                     </FormErrorMessage>
                  </FormControl>
               </VStack>
               <VStack align="stretch" mb={5}>
                  <FormControl isInvalid={!!errors.descriptionHero}>
                     <FormLabel>Gambar</FormLabel>
                     <Input
                        data-testid="file-input"
                        onChange={handleImageChange}
                        type="file"
                        pt={1}
                        variant="outline"
                     />
                     {fileImg?.length > 0 && (
                        <Box my={5}>
                           <img src={fileImg} alt={parseObj?.options?.titleHero} />
                        </Box>
                     )}
                     <FormErrorMessage>
                        {errors.descriptionHero && errors.descriptionHero.message}
                     </FormErrorMessage>
                  </FormControl>
               </VStack>

               <VStack align="stretch">
                  <Button
                     isLoading={loading}
                     onClick={handleSubmit(onEditSetting)}
                     colorScheme="blue"
                  >
                     Simpan
                  </Button>
               </VStack>
            </Container>
         </VStack>
      </DashboardLayoutUser>
   );
};

export default SettingDashboard;
