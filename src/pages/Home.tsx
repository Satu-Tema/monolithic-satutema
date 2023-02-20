import React from 'react';
import MainNavbar from 'components/main/navbar';
import MainHero from 'components/main/hero';
import { Box } from '@chakra-ui/react';
import MainWebsiteChooser from 'components/main/websitechooser';
import MainProjects from 'components/main/project';
import MainFooter from 'components/main/footer';

const Home = () => {
   return (
      <Box background="#FAFAFA">
         <MainNavbar />
         <MainHero />
         <MainWebsiteChooser />
         <MainProjects />
         <MainFooter />
      </Box>
   );
};

export default Home;
