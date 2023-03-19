import {
   Box,
   Button,
   Divider,
   Flex,
   Heading,
   Text,
   useColorModeValue,
   useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar1 from 'template/umkm/navbar/navbar1';
import Navbar2 from 'template/umkm/navbar/navbar2';
import Navbar3 from 'template/umkm/navbar/navbar3';
import ThemeHover from 'components/theme/ThemeHover';
import Hero1 from 'template/umkm/hero/hero1';
import Hero2 from 'template/umkm/hero/hero2';
import Feature1 from 'template/umkm/features/features1';
import Footerl from 'template/umkm/footer/footer1';
import Footer2 from 'template/umkm/footer/footer2';
import Footer3 from 'template/umkm/footer/footer3';
import Menu1 from 'template/umkm/menu/menu1';
import Testimoni1 from 'template/umkm/testimoni/testimoni1';
import Gallery1 from 'template/umkm/gallery/gallery1';
import axios from 'axios';
import { mutate } from 'swr';
import { HOST } from 'utils/Host';
import useRemoteDetailTheme from 'hooks/remote/useRemoteDetailTheme';

const ThemeEditor = () => {
   const navigate = useNavigate();
   const toast = useToast();
   const { id } = useParams();
   const [navEditor, setNavEditor] = useState('');
   const [heroEditor, setHeroEditor] = useState('');
   const [featureEditor, setFeatureEditor] = useState('');
   const [footerEditor, setFooterEditor] = useState('');
   const [menuEditor, setMenuEditor] = useState('');
   const [testimoniEditor, setTestimoniEditor] = useState('');
   const [galleryEditor, setGalleryEditor] = useState('');

   const [activeSidebar, setActiveSidebar] = useState({
      navbar: {
         navbar1: false,
         navbar2: false,
         navbar3: false,
      },
      hero: {
         hero1: false,
         hero2: false,
      },
      feature: {
         feature1: false,
      },
      menu: {
         menu1: false,
      },
      testimoni: {
         testimoni1: false,
      },
      gallery: {
         gallery1: false,
      },
      footer: {
         footer1: false,
         footer2: false,
         footer3: false,
      },
   });

   const [loading, setLoading] = useState(false);

   const { data } = useRemoteDetailTheme();

   const resultOrder =
      data?.theme_order && data?.theme_order?.length > 0 && data?.theme_order.toString().split(',');

   const checkEditorDefault = (keyword: string) =>
      resultOrder && resultOrder?.filter((item) => item.startsWith(keyword));

   useEffect(() => {
      if (data?.theme_order !== null) {
         const navDefault = checkEditorDefault('navbar')?.toString();
         const heroDefault = checkEditorDefault('hero')?.toString();
         const featureDefault = checkEditorDefault('feature')?.toString();
         const menuDefault = checkEditorDefault('menu')?.toString();
         const testimoniDefault = checkEditorDefault('testimoni')?.toString();
         const galleryDefault = checkEditorDefault('gallery')?.toString();
         const footerDefault = checkEditorDefault('footer')?.toString();

         if (navDefault) setNavEditor(navDefault as string);
         if (heroDefault) setHeroEditor(heroDefault as string);
         if (featureDefault) setFeatureEditor(featureDefault as string);
         if (menuDefault) setMenuEditor(menuDefault as string);
         if (testimoniDefault) setTestimoniEditor(testimoniDefault as string);
         if (galleryDefault) setGalleryEditor(galleryDefault as string);
         if (footerDefault) setFooterEditor(footerDefault as string);
      }
   }, [data?.theme_order]);

   const renderNavEditor = (id: string) => {
      switch (id) {
         case 'navbar1':
            return <Navbar1 />;
         case 'navbar2':
            return <Navbar2 />;
         case 'navbar3':
            return <Navbar3 />;
         default:
            return null;
      }
   };

   const renderHeroEditor = (id: string) => {
      switch (id) {
         case 'hero1':
            return <Hero1 />;
         case 'hero2':
            return <Hero2 />;
         default:
            return null;
      }
   };

   const renderFeatureEditor = (id: string) => {
      switch (id) {
         case 'feature1':
            return <Feature1 />;
         default:
            return null;
      }
   };

   const renderMenuEditor = (id: string) => {
      switch (id) {
         case 'menu1':
            return <Menu1 />;
         default:
            return null;
      }
   };

   const renderTestimoniEditor = (id: string) => {
      switch (id) {
         case 'testimoni1':
            return <Testimoni1 />;
         default:
            return null;
      }
   };

   const renderGalleryEditor = (id: string) => {
      switch (id) {
         case 'gallery1':
            return <Gallery1 />;
         default:
            return null;
      }
   };

   const renderFooterEditor = (id: string) => {
      switch (id) {
         case 'footer1':
            return <Footerl />;
         case 'footer2':
            return <Footer2 />;
         case 'footer3':
            return <Footer3 />;
         default:
            return null;
      }
   };

   const isAddEditor =
      navEditor === '' &&
      heroEditor === '' &&
      featureEditor === '' &&
      footerEditor === '' &&
      menuEditor === '' &&
      testimoniEditor === '' &&
      galleryEditor === ''
         ? 'center'
         : 'normal';

   const onSubmit = () => {
      setLoading(true);
      const data = [
         navEditor,
         heroEditor,
         featureEditor,
         footerEditor,
         menuEditor,
         galleryEditor,
         testimoniEditor,
      ]
         .toString()
         .split(',')
         .filter(Boolean)
         .join(',');

      axios
         .put(
            `${HOST as string}/admin/theme/themeorder/${id}`,
            {
               theme_order: data,
            },
            {
               headers: {
                  Authorization: `Bearer ${localStorage.getItem('xtoken') as string}`,
               },
            },
         )
         .then((data) => {
            if (data && data.data.status) {
               setLoading(false);
               mutate(`/admin/theme/${id}`);
               toast({
                  title: 'Sukses',
                  description: data.data.message,
                  status: 'success',
                  isClosable: true,
                  position: 'top-right',
               });
            } else {
               setLoading(false);
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
      <Box>
         {/* <Flex
            flexWrap={{ base: 'wrap', md: 'initial' }}
            gap={10}
            mb={5}
            justifyContent={isAddEditor}
            alignItems={isAddEditor}
            alignContent={isAddEditor}
         >
            <Button
               onClick={() => navigate('/admin/theme')}
               colorScheme="blue"
               variant="solid"
               minW={{ base: 'full', md: '20%' }}
            >
               Kembali
            </Button>

            <Button
               isLoading={loading}
               onClick={onSubmit}
               colorScheme="blue"
               variant="solid"
               w="full"
            >
               Simpan
            </Button>
         </Flex> */}

         <Flex
            top={0}
            as="nav"
            minW="full"
            zIndex={1}
            alignItems={'center'}
            justifyContent="space-between"
            p={5}
         >
            <Button
               onClick={() => navigate('/admin/theme')}
               colorScheme="blue"
               variant="solid"
               minW={{ base: 'full', md: '20%' }}
            >
               Kembali
            </Button>
            {/* <Box>
               <Heading
                  fontFamily={'Work Sans'}
                  fontWeight={'bold'}
                  color={useColorModeValue('gray.700', 'gray.50')}
                  // fontSize={26}
                  textAlign="center"
                  textTransform="capitalize"
               >
                  {data?.theme_name}
               </Heading>
            </Box> */}
            <Flex gap={5}>
               <Button
                  colorScheme="blue"
                  variant="solid"
                  // onClick={() => navigate('/auth/register')}
               >
                  Publikasi
               </Button>
               <Button colorScheme="blue" variant="solid" onClick={onSubmit} isLoading={loading}>
                  Simpan
               </Button>
            </Flex>
         </Flex>

         <Divider />
         <Flex
            m={6}
            gap={10}
            flexWrap={{ base: 'wrap', md: 'initial' }}
            justifyContent={isAddEditor}
            alignItems={isAddEditor}
            alignContent={isAddEditor}
         >
            <Box
               as="aside"
               transitionProperty="min-width, width"
               transitionDuration="ultra-slow"
               minW={{ base: 'full', md: '20%' }}
               borderRadius={10}
               border="1px solid #127CA6"
               p={3}
            >
               {/* Navbar */}
               <Box>
                  <Heading fontWeight={500} fontSize="md">
                     Navbar
                  </Heading>
                  <Box
                     cursor="pointer"
                     p={3}
                     rounded="10"
                     color={activeSidebar.navbar.navbar1 === true ? '#fff' : '#127CA6'}
                     my={3}
                     border="1px solid #127CA6"
                     backgroundColor={activeSidebar.navbar.navbar1 === true ? '#127CA6' : '#fff'}
                     _hover={{
                        backgroundColor: '#127CA6',
                        color: 'white',
                     }}
                     onClick={() => {
                        setNavEditor('navbar1');
                        setActiveSidebar({
                           ...activeSidebar,
                           navbar: {
                              navbar1: true,
                              navbar2: false,
                              navbar3: false,
                           },
                        });
                     }}
                  >
                     <Text>Navbar 1 - UMKM</Text>
                  </Box>
                  <Box
                     cursor="pointer"
                     p={3}
                     rounded="10"
                     my={3}
                     border="1px solid #127CA6"
                     color={activeSidebar.navbar.navbar2 === true ? '#fff' : '#127CA6'}
                     backgroundColor={activeSidebar.navbar.navbar2 === true ? '#127CA6' : '#fff'}
                     _hover={{
                        backgroundColor: '#127CA6',
                        color: 'white',
                     }}
                     onClick={() => {
                        setNavEditor('navbar2');
                        setActiveSidebar({
                           ...activeSidebar,
                           navbar: {
                              navbar1: false,
                              navbar2: true,
                              navbar3: false,
                           },
                        });
                     }}
                  >
                     <Text>Navbar 2 - UMKM</Text>
                  </Box>
                  <Box
                     cursor="pointer"
                     p={3}
                     rounded="10"
                     my={3}
                     border="1px solid #127CA6"
                     color={activeSidebar.navbar.navbar3 === true ? '#fff' : '#127CA6'}
                     backgroundColor={activeSidebar.navbar.navbar3 === true ? '#127CA6' : '#fff'}
                     _hover={{
                        backgroundColor: '#127CA6',
                        color: 'white',
                     }}
                     onClick={() => {
                        setNavEditor('navbar3');
                        setActiveSidebar({
                           ...activeSidebar,
                           navbar: {
                              navbar1: false,
                              navbar2: false,
                              navbar3: true,
                           },
                        });
                     }}
                  >
                     <Text>Navbar 3 - UMKM</Text>
                  </Box>
               </Box>

               {/* HERO */}
               <Box>
                  <Heading fontWeight={500} fontSize="md">
                     Hero
                  </Heading>
                  <Box
                     cursor="pointer"
                     p={3}
                     rounded="10"
                     my={3}
                     border="1px solid #127CA6"
                     _hover={{
                        backgroundColor: '#127CA6',
                        color: 'white',
                     }}
                     color={activeSidebar.hero.hero1 === true ? '#fff' : '#127CA6'}
                     backgroundColor={activeSidebar.hero.hero1 === true ? '#127CA6' : '#fff'}
                     onClick={() => {
                        setHeroEditor('hero1');
                        setActiveSidebar({
                           ...activeSidebar,
                           hero: {
                              hero1: true,
                              hero2: false,
                           },
                        });
                     }}
                  >
                     <Text>Hero 1 - UMKM</Text>
                  </Box>
                  <Box
                     cursor="pointer"
                     p={3}
                     rounded="10"
                     my={3}
                     border="1px solid #127CA6"
                     _hover={{
                        backgroundColor: '#127CA6',
                        color: 'white',
                     }}
                     color={activeSidebar.hero.hero2 === true ? '#fff' : '#127CA6'}
                     backgroundColor={activeSidebar.hero.hero2 === true ? '#127CA6' : '#fff'}
                     onClick={() => {
                        setHeroEditor('hero2');
                        setActiveSidebar({
                           ...activeSidebar,
                           hero: {
                              hero1: false,
                              hero2: true,
                           },
                        });
                     }}
                  >
                     <Text>Hero 2 - UMKM</Text>
                  </Box>
               </Box>

               {/* Feature  */}
               <Box>
                  <Heading fontWeight={500} fontSize="md">
                     Fitur
                  </Heading>
                  <Box
                     cursor="pointer"
                     p={3}
                     rounded="10"
                     my={3}
                     border="1px solid #127CA6"
                     _hover={{
                        backgroundColor: '#127CA6',
                        color: 'white',
                     }}
                     color={activeSidebar.feature.feature1 === true ? '#fff' : '#127CA6'}
                     backgroundColor={activeSidebar.feature.feature1 === true ? '#127CA6' : '#fff'}
                     onClick={() => {
                        setFeatureEditor('feature1');
                        setActiveSidebar({
                           ...activeSidebar,
                           feature: {
                              feature1: true,
                           },
                        });
                     }}
                  >
                     <Text>Feature 1 - UMKM</Text>
                  </Box>
               </Box>

               {/* Menu  */}
               <Box>
                  <Heading fontWeight={500} fontSize="md">
                     Menu
                  </Heading>
                  <Box
                     cursor="pointer"
                     p={3}
                     rounded="10"
                     my={3}
                     border="1px solid #127CA6"
                     _hover={{
                        backgroundColor: '#127CA6',
                        color: 'white',
                     }}
                     color={activeSidebar.menu.menu1 === true ? '#fff' : '#127CA6'}
                     backgroundColor={activeSidebar.menu.menu1 === true ? '#127CA6' : '#fff'}
                     onClick={() => {
                        setMenuEditor('menu1');
                        setActiveSidebar({
                           ...activeSidebar,
                           menu: {
                              menu1: true,
                           },
                        });
                     }}
                  >
                     <Text>Menu 1 - UMKM</Text>
                  </Box>
               </Box>

               {/* Testimoni */}
               <Box>
                  <Heading fontWeight={500} fontSize="md">
                     Testimoni
                  </Heading>
                  <Box
                     cursor="pointer"
                     p={3}
                     rounded="10"
                     my={3}
                     border="1px solid #127CA6"
                     _hover={{
                        backgroundColor: '#127CA6',
                        color: 'white',
                     }}
                     color={activeSidebar.testimoni.testimoni1 === true ? '#fff' : '#127CA6'}
                     backgroundColor={
                        activeSidebar.testimoni.testimoni1 === true ? '#127CA6' : '#fff'
                     }
                     onClick={() => {
                        setTestimoniEditor('testimoni1');
                        setActiveSidebar({
                           ...activeSidebar,
                           testimoni: {
                              testimoni1: true,
                           },
                        });
                     }}
                  >
                     <Text>Testimoni 1 - UMKM</Text>
                  </Box>
               </Box>

               {/* Gallery */}
               <Box>
                  <Heading fontWeight={500} fontSize="md">
                     Galeri
                  </Heading>
                  <Box
                     cursor="pointer"
                     p={3}
                     rounded="10"
                     my={3}
                     border="1px solid #127CA6"
                     _hover={{
                        backgroundColor: '#127CA6',
                        color: 'white',
                     }}
                     color={activeSidebar.gallery.gallery1 === true ? '#fff' : '#127CA6'}
                     backgroundColor={activeSidebar.gallery.gallery1 === true ? '#127CA6' : '#fff'}
                     onClick={() => {
                        setGalleryEditor('gallery1');
                        setActiveSidebar({
                           ...activeSidebar,
                           gallery: {
                              gallery1: true,
                           },
                        });
                     }}
                  >
                     <Text>Galeri 1 - UMKM</Text>
                  </Box>
               </Box>

               {/* Footer */}
               <Box>
                  <Heading fontWeight={500} fontSize="md">
                     Footer
                  </Heading>
                  <Box
                     cursor="pointer"
                     p={3}
                     rounded="10"
                     my={3}
                     border="1px solid #127CA6"
                     _hover={{
                        backgroundColor: '#127CA6',
                        color: 'white',
                     }}
                     color={activeSidebar.footer.footer1 === true ? '#fff' : '#127CA6'}
                     backgroundColor={activeSidebar.footer.footer1 === true ? '#127CA6' : '#fff'}
                     onClick={() => {
                        setFooterEditor('footer1');
                        setActiveSidebar({
                           ...activeSidebar,
                           footer: {
                              footer1: true,
                              footer2: false,
                              footer3: false,
                           },
                        });
                     }}
                  >
                     <Text>Footer 1 - UMKM</Text>
                  </Box>
                  <Box
                     cursor="pointer"
                     p={3}
                     rounded="10"
                     my={3}
                     border="1px solid #127CA6"
                     _hover={{
                        backgroundColor: '#127CA6',
                        color: 'white',
                     }}
                     color={activeSidebar.footer.footer2 === true ? '#fff' : '#127CA6'}
                     backgroundColor={activeSidebar.footer.footer2 === true ? '#127CA6' : '#fff'}
                     onClick={() => {
                        setFooterEditor('footer2');
                        setActiveSidebar({
                           ...activeSidebar,
                           footer: {
                              footer1: false,
                              footer2: true,
                              footer3: false,
                           },
                        });
                     }}
                  >
                     <Text>Footer 2 - UMKM</Text>
                  </Box>
                  <Box
                     cursor="pointer"
                     p={3}
                     rounded="10"
                     my={3}
                     border="1px solid #127CA6"
                     _hover={{
                        backgroundColor: '#127CA6',
                        color: 'white',
                     }}
                     color={activeSidebar.footer.footer3 === true ? '#fff' : '#127CA6'}
                     backgroundColor={activeSidebar.footer.footer3 === true ? '#127CA6' : '#fff'}
                     onClick={() => {
                        setFooterEditor('footer3');
                        setActiveSidebar({
                           ...activeSidebar,
                           footer: {
                              footer1: false,
                              footer2: false,
                              footer3: true,
                           },
                        });
                     }}
                  >
                     <Text>Footer 3 - UMKM</Text>
                  </Box>
               </Box>
            </Box>
            <Box w="full">
               {navEditor !== '' && (
                  <>
                     <ThemeHover
                        onClose={() => {
                           setNavEditor('');
                           setActiveSidebar({
                              ...activeSidebar,
                              navbar: {
                                 navbar1: false,
                                 navbar2: false,
                                 navbar3: false,
                              },
                           });
                        }}
                     >
                        <>{renderNavEditor(navEditor)}</>
                     </ThemeHover>
                  </>
               )}

               {heroEditor !== '' && (
                  <ThemeHover
                     onClose={() => {
                        setHeroEditor('');
                        setActiveSidebar({
                           ...activeSidebar,
                           hero: {
                              hero1: false,
                              hero2: false,
                           },
                        });
                     }}
                  >
                     <>{renderHeroEditor(heroEditor)}</>
                  </ThemeHover>
               )}

               {featureEditor !== '' && (
                  <ThemeHover
                     onClose={() => {
                        setFeatureEditor('');
                        setActiveSidebar({
                           ...activeSidebar,
                           feature: {
                              feature1: false,
                           },
                        });
                     }}
                  >
                     <>{renderFeatureEditor(featureEditor)}</>
                  </ThemeHover>
               )}

               {menuEditor !== '' && (
                  <ThemeHover
                     onClose={() => {
                        setMenuEditor('');
                        setActiveSidebar({
                           ...activeSidebar,
                           menu: {
                              menu1: false,
                           },
                        });
                     }}
                  >
                     <>{renderMenuEditor(menuEditor)}</>
                  </ThemeHover>
               )}

               {testimoniEditor !== '' && (
                  <ThemeHover
                     onClose={() => {
                        setTestimoniEditor('');
                        setActiveSidebar({
                           ...activeSidebar,
                           testimoni: {
                              testimoni1: false,
                           },
                        });
                     }}
                  >
                     <>{renderTestimoniEditor(testimoniEditor)}</>
                  </ThemeHover>
               )}

               {galleryEditor !== '' && (
                  <ThemeHover
                     onClose={() => {
                        setGalleryEditor('');
                        setActiveSidebar({
                           ...activeSidebar,
                           gallery: {
                              gallery1: false,
                           },
                        });
                     }}
                  >
                     <>{renderGalleryEditor(galleryEditor)}</>
                  </ThemeHover>
               )}

               {footerEditor !== '' && (
                  <ThemeHover
                     onClose={() => {
                        setFooterEditor('');
                        setActiveSidebar({
                           ...activeSidebar,
                           footer: {
                              footer1: false,
                              footer2: false,
                              footer3: false,
                           },
                        });
                     }}
                  >
                     <>{renderFooterEditor(footerEditor)}</>
                  </ThemeHover>
               )}

               {navEditor === '' &&
                  heroEditor === '' &&
                  featureEditor === '' &&
                  footerEditor === '' &&
                  menuEditor === '' &&
                  galleryEditor === '' && (
                     <Heading color="rgba(0, 0, 0, 0.4)" textAlign="center">
                        Tambah Section
                     </Heading>
                  )}
            </Box>
         </Flex>
      </Box>
   );
};

export default ThemeEditor;
