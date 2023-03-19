import {
   Button,
   Box,
   HStack,
   VStack,
   Icon,
   Spacer,
   Text,
   Table,
   Tbody,
   Thead,
   Tr,
   Th,
   Divider,
} from '@chakra-ui/react';
import DashboardCreateNewTheme from 'components/dashboard/DashboardCreateNewTheme';
import DashboardLayout from 'components/dashboard/DashboardLayout';
import DashboardTableTheme from 'components/dashboard/DashboardTableTheme';
import useRemoteTheme from 'hooks/remote/useRemoteTheme';
import { IoAdd } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Theme = () => {
   const navigate = useNavigate();
   const { data } = useRemoteTheme();

   return (
      <DashboardLayout sidebarFor="admin">
         <VStack align="stretch" py="6" px="10" spacing="6">
            <DashboardCreateNewTheme />
            <Box overflow="auto">
               <Table variant="striped">
                  <Thead>
                     <Tr fontSize="lg">
                        <Th>Judul</Th>
                        <Th>Kategori</Th>
                        <Th textAlign="center">Aksi</Th>
                     </Tr>
                  </Thead>
                  <Tbody>
                     {data && data.map((el) => <DashboardTableTheme dataTheme={el} key={el.id} />)}
                  </Tbody>
               </Table>
            </Box>
         </VStack>
      </DashboardLayout>
   );
};

export default Theme;
