import {
   Box,
   Button,
   Divider,
   Drawer,
   DrawerBody,
   DrawerContent,
   DrawerHeader,
   DrawerOverlay,
   Flex,
   Heading,
   Input,
   Text,
   useDisclosure,
} from '@chakra-ui/react';
import NavbarMobile from 'components/theme/NavbarMobile';
import { useRef } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';
import generateSidebarItemsUsers from 'utils/generatedata/sidebar/sidebarItems/users';

const Navbar1 = ({ logo }: { logo?: string }) => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const btnRef = useRef<HTMLButtonElement>(null);

   return (
      <Box
         backgroundColor="white"
         boxShadow="0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
         display="flex"
         justifyContent="space-between"
         alignItems="center"
         p={5}
      >
         {/* Left */}
         <Box cursor="pointer">
            <Heading>{logo ?? 'Logo'}</Heading>
         </Box>

         {/* Mid - Search Bar */}
         <Box
            rounded="full"
            border="2"
            alignItems="center"
            shadow="0 1px 2px 0 rgb(0 0 0 / 0.05)"
            // className="flex items-center py-2 rounded-full md:border-2 md:shadow-sm"
         >
            <Input
               placeholder="Cari produk"
               pl={5}
               textColor="grey"
               background="transparent"
               outline="none"
               display={{ base: 'none', lg: 'block' }}
            />
         </Box>

         {/* Right */}
         <Flex alignItems="center" justify="end" gap={4} display={{ base: 'none', lg: 'flex' }}>
            <Link to="/#beranda">
               <Text>Beranda</Text>
            </Link>
            <Link to="/#tentang">
               <Text>Tentang</Text>
            </Link>
            <Link to="/#menu">
               <Text>Menu</Text>
            </Link>
            <Link to="/#galeri">
               <Text>Galleri</Text>
            </Link>
            <Link to="/#testimoni">
               <Text>Testimoni</Text>
            </Link>
         </Flex>
         <Button ref={btnRef} onClick={onOpen} display={{ base: 'block', lg: 'none' }}>
            <IoMdMenu />
         </Button>
         <Drawer isOpen={isOpen} onClose={onClose} placement="right">
            <DrawerOverlay />
            <DrawerContent>
               <Box
                  zIndex={2}
                  py="6"
                  h="100vh"
                  overflow="auto"
                  bg="linear-gradient(to right, #005c97, #363795);"
                  color="white"
               >
                  <Box ml="6">
                     <Heading>Logo</Heading>
                  </Box>
                  <Divider my={3} />
                  <Flex as="nav" flexDirection="column" align="stretch" mt="6">
                     {generateSidebarItemsUsers()?.map((item, index) => (
                        <NavbarMobile key={index} item={item} />
                     ))}
                  </Flex>
               </Box>
            </DrawerContent>
         </Drawer>
      </Box>
   );
};

export default Navbar1;
