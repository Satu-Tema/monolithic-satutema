import { Card, CardBody, VStack, Text, Flex, Box, Button, Spacer } from '@chakra-ui/react';
import DashboardCreateNewCategory from 'components/dashboard/DashboardCreateNewCategory';
import DashboardLayout from 'components/dashboard/DashboardLayout';

const Categories = () => {
   return (
      <DashboardLayout sidebarFor="admin">
         <VStack align="stretch" py="6" px="10" spacing="6">
            <DashboardCreateNewCategory />
            <Card width={300}>
               <CardBody>
                  <Flex alignItems="center" justify="space-between">
                     <Text>UMKM</Text>
                     <Box>
                        <Button colorScheme="blue" mr={2}>
                           Edit
                        </Button>
                        <Button colorScheme="red">Delete</Button>
                     </Box>
                  </Flex>
               </CardBody>
            </Card>
         </VStack>
      </DashboardLayout>
   );
};

export default Categories;
