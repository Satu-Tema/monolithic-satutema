import {
   IconButton,
   Menu,
   MenuButton,
   MenuList,
   MenuItem,
   Tr,
   Td,
   Text,
   useDisclosure,
   UnorderedList,
   ListItem,
   VStack,
   LinkBox,
   LinkOverlay,
   Link,
   useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import moment from 'moment';
import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { mutate } from 'swr';
import { ThemeRemoteDataType } from 'ts/Theme';
import { HOST } from 'utils/Host';

import ModalWarning from '../DashboardModalWarning';

interface IDashboardTableTheme {
   dataTheme: ThemeRemoteDataType;
}
const DashboardTableTheme = ({ dataTheme }: IDashboardTableTheme) => {
   const toast = useToast();
   const [loading, setLoading] = useState(false);
   const {
      isOpen: isDeleteModalOpen,
      onOpen: onDeleteModalOpen,
      onClose: onDeleteModalClose,
   } = useDisclosure();

   const onDelete = () => {
      setLoading(true);
      axios
         .delete(`${HOST as string}/admin/theme/${dataTheme.id}`, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('xtoken') as string}`,
            },
         })
         .then((data) => {
            setLoading(false);
            if (data && data.data.status) {
               mutate('/admin/theme');
               onDeleteModalClose();
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
         <Tr fontSize="md">
            <Td>
               <Text textTransform="capitalize">{dataTheme?.theme_name}</Text>
            </Td>
            <Td>{dataTheme?.category}</Td>
            <Td textAlign="center">
               <Menu isLazy placement="left">
                  <MenuButton
                     as={IconButton}
                     icon={<BsThreeDotsVertical />}
                     variant="outline"
                     w="14"
                     colorScheme="blue"
                     _hover={{
                        backgroundColor: '#2A6B84',
                        color: '#fff',
                        outline: 'none',
                     }}
                  />
                  <MenuList minW="36">
                     <LinkBox as="a">
                        <MenuItem>
                           <Link href={`/admin/users/edit/1`}>
                              <LinkOverlay>Edit</LinkOverlay>
                           </Link>
                        </MenuItem>
                     </LinkBox>
                     <MenuItem onClick={onDeleteModalOpen}>Delete</MenuItem>
                  </MenuList>
               </Menu>
            </Td>
         </Tr>

         <ModalWarning
            isOpen={isDeleteModalOpen}
            onClose={onDeleteModalClose}
            buttonText="Hapus Tema"
            buttonOnClick={onDelete}
            isLoading={loading}
         >
            Kamu yakin ingin menghapus tema {dataTheme?.theme_name} ?
         </ModalWarning>
      </>
   );
};

export default DashboardTableTheme;
