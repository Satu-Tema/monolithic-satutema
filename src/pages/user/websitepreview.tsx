import {
   Box,
   Button,
   Container,
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
import useRemoteWebsite from 'hooks/remote/useRemoteWebsite';
import useRemoteTheme from 'hooks/remote/useRemoteTheme';

const WebsitePreview = () => {
   const navigate = useNavigate();
   const toast = useToast();
   const { id } = useParams();
   const [loading, setLoading] = useState(false);

   console.log('param', id);

   const { data } = useRemoteWebsite();
   const { data: theme } = useRemoteTheme();

   // const resultOrder =
   //    data?.theme_order && data?.theme_order?.length > 0 && data?.theme_order.toString().split(',');

   console.log('hehe ', data);
   console.log('theme ', theme);

   const findTheme = theme && id && theme.filter((el) => parseInt(el.id) === parseInt(id))[0];
   console.log('find', findTheme);

   const renderNavEditor = (id: string | undefined) => {
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

   const renderHeroEditor = (id: string | undefined) => {
      switch (id) {
         case 'hero1':
            return <Hero1 />;
         case 'hero2':
            return <Hero2 />;
         default:
            return null;
      }
   };

   const renderFeatureEditor = (id: string | undefined) => {
      switch (id) {
         case 'feature1':
            return <Feature1 />;
         default:
            return null;
      }
   };

   const renderMenuEditor = (id: string | undefined) => {
      switch (id) {
         case 'menu1':
            return <Menu1 />;
         default:
            return null;
      }
   };

   const renderTestimoniEditor = (id: string | undefined) => {
      switch (id) {
         case 'testimoni1':
            return <Testimoni1 />;
         default:
            return null;
      }
   };

   const renderGalleryEditor = (id: string | undefined) => {
      switch (id) {
         case 'gallery1':
            return <Gallery1 />;
         default:
            return null;
      }
   };

   const renderFooterEditor = (id: string | undefined) => {
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

   const findThemeData = (query: string) =>
      findTheme && findTheme.theme_order.split(',').filter((el) => el.includes(query))[0];

   return (
      <>
         {findTheme && findThemeData && (
            <>
               {renderNavEditor(findThemeData('nav'))}
               {renderHeroEditor(findThemeData('hero'))}
               <Container maxW="container.xl">
                  {renderFeatureEditor(findThemeData('feature'))}
                  {renderMenuEditor(findThemeData('menu'))}
                  {renderTestimoniEditor(findThemeData('testimoni'))}
                  {renderGalleryEditor(findThemeData('gallery'))}
               </Container>
               {renderFooterEditor(findThemeData('footer'))}
            </>
         )}
      </>
   );
};

export default WebsitePreview;
