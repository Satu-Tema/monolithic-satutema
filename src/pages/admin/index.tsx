import {
   Card,
   CardBody,
   Flex,
   Stat,
   VStack,
   StatLabel,
   StatNumber,
   SimpleGrid,
} from '@chakra-ui/react';
import useSwr from 'swr';
import DashboardLayout from 'components/dashboard/DashboardLayout';

const AdminDashboard = () => {
   const { data } = useSwr('/admin/count-dashboard');

   return (
      <DashboardLayout sidebarFor="admin">
         <VStack align="stretch" py="6" px="10" spacing="6">
            <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
               <Card minH="100px">
                  <CardBody>
                     <Flex flexDirection="row" align="center" justify="center" w="100%">
                        <Stat me="auto">
                           <StatLabel fontSize="sm" color="gray.400" fontWeight="bold" pb=".1rem">
                              Total Pengguna
                           </StatLabel>
                           <Flex>
                              <StatNumber fontSize="lg" color="black">
                                 {data?.countUser || 0}
                              </StatNumber>
                           </Flex>
                        </Stat>
                        {/* <IconBox as='box' h={"45px"} w={"45px"} bg={iconTeal}>
            {icon}
          </IconBox> */}
                     </Flex>
                  </CardBody>
               </Card>
               <Card minH="100px">
                  <CardBody>
                     <Flex flexDirection="row" align="center" justify="center" w="100%">
                        <Stat me="auto">
                           <StatLabel fontSize="sm" color="gray.400" fontWeight="bold" pb=".1rem">
                              Total Website
                           </StatLabel>
                           <Flex>
                              <StatNumber fontSize="lg" color="black">
                                 {data?.countWebsite || 0}
                              </StatNumber>
                           </Flex>
                        </Stat>
                        {/* <IconBox as='box' h={"45px"} w={"45px"} bg={iconTeal}>
            {icon}
          </IconBox> */}
                     </Flex>
                  </CardBody>
               </Card>
               <Card minH="100px">
                  <CardBody>
                     <Flex flexDirection="row" align="center" justify="center" w="100%">
                        <Stat me="auto">
                           <StatLabel fontSize="sm" color="gray.400" fontWeight="bold" pb=".1rem">
                              Total Tema Website
                           </StatLabel>
                           <Flex>
                              <StatNumber fontSize="lg" color="black">
                                 {data?.countTheme || 0}
                              </StatNumber>
                           </Flex>
                        </Stat>
                        {/* <IconBox as='box' h={"45px"} w={"45px"} bg={iconTeal}>
            {icon}
          </IconBox> */}
                     </Flex>
                  </CardBody>
               </Card>
            </SimpleGrid>
         </VStack>
      </DashboardLayout>
   );
};

export default AdminDashboard;
