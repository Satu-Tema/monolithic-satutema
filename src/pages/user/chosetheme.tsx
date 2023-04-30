import {
   Badge,
   Button,
   ButtonGroup,
   Card,
   CardBody,
   CardFooter,
   CardHeader,
   Heading,
   SimpleGrid,
   Text,
   VStack,
   useDisclosure,
   useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import DashboardLayoutUser from 'components/dashboard/DashboardLayoutUser';
import ModalWarning from 'components/dashboard/DashboardModalWarning';
import useRemoteTheme from 'hooks/remote/useRemoteTheme';
import useRemoteWebsite from 'hooks/remote/useRemoteWebsite';
import { useState } from 'react';
import { mutate } from 'swr';
import { ThemeRemoteDataType } from 'ts/Theme';
import { HOST } from 'utils/Host';

const ChoseTheme = () => {
   const toast = useToast();
   const { data } = useRemoteTheme();
   const { data: website } = useRemoteWebsite();
   const [edit, setEdit] = useState<ThemeRemoteDataType>();
   const [loading, setLoading] = useState(false);
   const { isOpen: isOpenEdit, onOpen: onOpenedit, onClose: onCloseEdit } = useDisclosure();

   const onHandleOpenEdit = (data: ThemeRemoteDataType) => {
      onOpenedit();
      setEdit(data);
   };

   const onEdit = () => {
      setLoading(true);
      axios
         .put(
            `${HOST as string}/user/website/theme`,
            {
               theme_id: edit?.id,
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
               mutate('/user/website');
               onCloseEdit();
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
            <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
               {data &&
                  data.map((el) => (
                     <Card key={el.id}>
                        <CardHeader>
                           <VStack>
                              <Heading size="md">{el.theme_name}</Heading>
                              <Badge>{el.category}</Badge>
                           </VStack>
                           {/* <Button>Pilih Tema</Button> */}
                        </CardHeader>
                        <CardFooter alignItems="center" justifyContent="center" textAlign="center">
                           {website?.theme_id === el.id ? (
                              <Button
                                 disabled={true}
                                 width="100%"
                                 colorScheme="blue"
                                 variant="outline"
                              >
                                 Digunakan
                              </Button>
                           ) : (
                              <ButtonGroup>
                                 <Button onClick={() => onHandleOpenEdit(el)} colorScheme="blue">
                                    Pilih Tema
                                 </Button>
                                 <Button
                                    colorScheme="blue"
                                    onClick={() => window.open(`/preview/${el.id}`, '_blank')}
                                 >
                                    Lihat
                                 </Button>
                              </ButtonGroup>
                           )}
                        </CardFooter>
                     </Card>
                  ))}
            </SimpleGrid>
         </VStack>
         <ModalWarning
            buttonText="Rubah Tema"
            isOpen={isOpenEdit}
            onClose={onCloseEdit}
            buttonOnClick={onEdit}
            isLoading={loading}
         >
            Apakah Anda yakin ingin merubah tema &quot;{edit?.theme_name}&quot;?
         </ModalWarning>
      </DashboardLayoutUser>
   );
};

export default ChoseTheme;
