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

const Website = () => {
   const navigate = useNavigate();
   const toast = useToast();
   const { id } = useParams();
   const [loading, setLoading] = useState(false);

   const { data } = useRemoteWebsite();
   const { data: theme } = useRemoteTheme();

   // const resultOrder =
   //    data?.theme_order && data?.theme_order?.length > 0 && data?.theme_order.toString().split(',');

   console.log('hehe ', data);
   console.log('theme ', theme);

   const findTheme = data && theme && theme.filter((el) => el.id === data.theme_id)[0];
   console.log('find', findTheme);
   const content = data && JSON.parse(data.content);
   console.log(content);

   const renderNavEditor = (id: string | undefined) => {
      if (data) {
         switch (id) {
            case 'navbar1':
               return <Navbar1 logo={data?.website_name} />;
            case 'navbar2':
               return <Navbar2 logo={data?.website_name} />;
            case 'navbar3':
               return <Navbar3 logo={data?.website_name} />;
            default:
               return null;
         }
      }
   };

   const renderHeroEditor = (id: string | undefined) => {
      if (content) {
         switch (id) {
            case 'hero1':
               return (
                  <Hero1
                     titleHero={content.options.titleHero}
                     descriptionHero={content.options.descriptionHero}
                     imageHero={content.options.imageHero}
                  />
               );
            case 'hero2':
               return (
                  <Hero2
                     titleHero={content.options.titleHero}
                     descriptionHero={content.options.descriptionHero}
                  />
               );
            default:
               return null;
         }
      }
   };

   const renderFeatureEditor = (id: string | undefined) => {
      if (content) {
         switch (id) {
            case 'feature1':
               return (
                  <Feature1
                     title={content.feature.title}
                     description={content.feature.description}
                     imageFeature={content.feature.imageFeature}
                  />
               );
            default:
               return null;
         }
      }
   };

   const renderMenuEditor = (id: string | undefined) => {
      if (content) {
         switch (id) {
            case 'menu1':
               return <Menu1 data={content.product} />;
            default:
               return null;
         }
      }
   };

   const renderTestimoniEditor = (id: string | undefined) => {
      if (content) {
         switch (id) {
            case 'testimoni1':
               return <Testimoni1 data={content.testimony} />;
            default:
               return null;
         }
      }
   };

   const renderGalleryEditor = (id: string | undefined) => {
      if (content) {
         switch (id) {
            case 'gallery1':
               return <Gallery1 data={content.gallery} />;
            default:
               return null;
         }
      }
   };

   const renderFooterEditor = (id: string | undefined) => {
      if (content) {
         switch (id) {
            case 'footer1':
               return (
                  <Footerl
                     instagram={content.options.instagram}
                     twitter={content.options.twitter}
                     youtube={content.options.youtube}
                  />
               );
            case 'footer2':
               return (
                  <Footer2
                     instagram={content.options.instagram}
                     twitter={content.options.twitter}
                     youtube={content.options.youtube}
                  />
               );
            case 'footer3':
               return (
                  <Footer3
                     instagram={content.options.instagram}
                     twitter={content.options.twitter}
                     youtube={content.options.youtube}
                  />
               );
            default:
               return null;
         }
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

export default Website;
