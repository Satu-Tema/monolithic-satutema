import {
   Button,
   Box,
   HStack,
   Stack,
   VStack,
   Icon,
   Input,
   InputGroup,
   InputLeftElement,
   Spacer,
   Text,
   Table,
   Tbody,
   Thead,
   Tr,
   Th,
   Spinner,
   FormControl,
   Divider,
} from '@chakra-ui/react';
import DashboardLayout from 'components/dashboard/DashboardLayout';
import DashboardTableRowUser from 'components/dashboard/DashboardTableTheme';
import { IoAdd } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Theme = () => {
   const navigate = useNavigate();
   return (
      <DashboardLayout sidebarFor="admin">
         <VStack align="stretch" py="6" px="10" spacing="6">
            <HStack>
               <Text fontSize="24" fontWeight="semibold">
                  Tema
               </Text>
               <Spacer />
               <Button
                  rounded="md"
                  leftIcon={<Icon as={IoAdd} fontSize="xl" />}
                  variant="outline"
                  onClick={() => navigate('/admin/theme-editor')}
                  px="4"
                  colorScheme="blue"
               >
                  Buat Tema
               </Button>
            </HStack>
            <Divider />
            <Box overflow="auto">
               <Table variant="striped">
                  <Thead>
                     <Tr fontSize="lg">
                        <Th>Judul</Th>
                        <Th>Kategori</Th>
                        <Th>Link</Th>
                        <Th>Aksi</Th>
                     </Tr>
                  </Thead>
                  <Tbody>
                     <DashboardTableRowUser />
                  </Tbody>
               </Table>
            </Box>
         </VStack>
      </DashboardLayout>
   );
};

export default Theme;
