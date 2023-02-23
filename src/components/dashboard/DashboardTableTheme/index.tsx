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
} from '@chakra-ui/react';
import moment from 'moment';
import { BsThreeDotsVertical } from 'react-icons/bs';

import ModalWarning from '../DashboardModalWarning';

const DashboardTableRowUser = () => {
   const {
      isOpen: isDeleteModalOpen,
      onOpen: onDeleteModalOpen,
      onClose: onDeleteModalClose,
   } = useDisclosure();

   return (
      <>
         <Tr fontSize="md">
            <Td>
               <Text>sdsdfcsdf</Text>
            </Td>
            <Td>qwqewe</Td>
            <Td>sdfsdf</Td>
            <Td>
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
                     <MenuItem>Delete</MenuItem>
                  </MenuList>
               </Menu>
            </Td>
         </Tr>

         <ModalWarning
            isOpen={isDeleteModalOpen}
            onClose={onDeleteModalClose}
            buttonText="Hapus Murid"
            buttonOnClick={() => {}}
            // isLoading={isDelettingUser}
         >
            Kamu yakin ingin menghapus murid?
         </ModalWarning>
      </>
   );
};

export default DashboardTableRowUser;
