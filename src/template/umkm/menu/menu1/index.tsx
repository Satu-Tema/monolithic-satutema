import { Box, Button, Container, Flex, Heading, useColorModeValue, chakra } from '@chakra-ui/react';
import MenuCard from 'components/theme/MenuCard';
import React, { useState } from 'react';
const Data = {
   main: [
      {
         title: 'Reguler Zupa soup',
         description: 'Berisi soup smokebeef ukuran cup 11 cm',
         image: `${process.env.PUBLIC_URL}/images/foodplaceholder.jpg`,
      },
      {
         title: 'Reguler Lasagna',
         description: 'Beef Lasagna ukurang cup 11 cm',
         image: `${process.env.PUBLIC_URL}/images/foodplaceholder.jpg`,
      },
      {
         title: 'Mini Zupa Soup',
         description: 'Berisi 4 mini zupa soup smokebeef',
         image: `${process.env.PUBLIC_URL}/images/foodplaceholder.jpg`,
      },
      {
         title: 'Mini Lasagna',
         description: 'Berisi 4 mini beef lasagna',
         image: `${process.env.PUBLIC_URL}/images/foodplaceholder.jpg`,
      },
      {
         title: 'Mini Mix',
         description: '1 Box berisi 2 mini zupa dan 2 mini lasagna',
         image: `${process.env.PUBLIC_URL}/images/foodplaceholder.jpg`,
      },
   ],
   hampers: [
      {
         title: 'Hampers Mini',
         description:
            'Hampers yang berisi 4 mini zuppa atau mini lasagna yang dikemas dalam 1 box dengan tambahan pita dan ucapan cantik ',
         image: `${process.env.PUBLIC_URL}/images/foodplaceholder.jpg`,
      },
      {
         title: 'Hampers Premium',
         description:
            'Hampers yang berisi 4 regular zuppa atau lasagna yang dikemas dalam HardBox dengan tambahan pita dan ucapan sehingga menambah kesan luxury',
         image: `${process.env.PUBLIC_URL}/images/foodplaceholder.jpg`,
      },
   ],
   prasmanan: [
      {
         title: 'Paket Wazzoup Mini Zuppa',
         description:
            'Mini zuppa soup 200 pcs, Ukuran cup soup  diameter 7 cm | Sop isi smoke beef, jagung, jamur, Piring lepek dan sendok (disposable)',
         image: `${process.env.PUBLIC_URL}/images/foodplaceholder.jpg`,
      },
      {
         title: 'Paket Wazzoup Mini Mix',
         description:
            'Mini zuppa soup 100pcs + Mini lasagna 100pcs, Ukuran cup lasagna 7x7cm, Soup Zuppa isi smoke beef, jagung, jamur, Lasagna isi daging giling, Piring lepek dan sendok (disposable)',
         image: `${process.env.PUBLIC_URL}/images/foodplaceholder.jpg`,
      },
      {
         title: 'Paket Wazzoup Zuppa Ceramic Pot',
         description:
            'Minimal order 25 pcs | Ukuran Mangkok keramik diameter 12 cm | Sop isi smoke beef, jagung, jamur | Piring lepek mangkok keramik dan sendok',
         image: `${process.env.PUBLIC_URL}/images/foodplaceholder.jpg`,
      },
   ],
};

const Menu1 = () => {
   const [activeMenu, setActiveMenu] = useState('Main Menu');
   const onActiveMenu = (menu: string) => setActiveMenu(menu);

   return (
      <>
         <Heading
            fontFamily={'Work Sans'}
            fontWeight={'bold'}
            color={useColorModeValue('gray.700', 'gray.50')}
            // fontSize={26}
            textAlign="center"
            my={6}
         >
            Menu Kami
         </Heading>
         <Box
            width={{ base: 'full', sm: 'lg', lg: 'xl' }}
            margin={'auto'}
            textAlign="center"
            mb={5}
            maxW="100%"
         >
            <chakra.h2
               margin={'auto'}
               width={{ base: '100%', md: '70%' }}
               fontFamily={'Inter'}
               fontWeight={'medium'}
               color={useColorModeValue('gray.500', 'gray.400')}
            >
               See our menu influencers use EEZY to manage their social media content!
            </chakra.h2>
         </Box>
         <Flex
            flexWrap={{ base: 'wrap', md: 'nowrap' }}
            justifyContent="center"
            gap={5}
            maxW="full"
         >
            <Box
               bg="#F2EFEF"
               minH="80vh"
               gap={10}
               minW={{ base: 'auto', md: '20%' }}
               w="full"
               p={5}
               textAlign="center"
               rounded="md"
            >
               {['Main Menu', 'Menu Hampers', 'Menu Prasmanan'].map((el, i) => (
                  <Box
                     key={i}
                     onClick={() => onActiveMenu(el)}
                     minW="full"
                     rounded="full"
                     mb={8}
                     p={3}
                     cursor="pointer"
                     border={`${activeMenu !== el ? '1px solid blue' : ''}`}
                     color={`${activeMenu !== el ? 'black' : 'white'}`}
                     background={`${activeMenu !== el ? '' : 'blue'}`}
                  >
                     {el}
                  </Box>
               ))}
            </Box>
            <Box bg="#F2EFEF" minH="fit-content" minW="80%" textAlign="center" rounded="md" pt={5}>
               <Flex
                  flexWrap="wrap"
                  justifyContent="center"
                  justify={{ base: 'auto', md: 'start' }}
                  ml={5}
                  gap={5}
               >
                  {activeMenu === 'Main Menu' ? (
                     <>
                        {Data.main.map((el, i) => (
                           <MenuCard
                              key={el.title}
                              title={el.title}
                              description={el.description}
                              image={el.image}
                           />
                        ))}
                     </>
                  ) : activeMenu === 'Menu Hampers' ? (
                     <>
                        {Data.hampers.map((el, i) => (
                           <MenuCard
                              key={el.title}
                              title={el.title}
                              description={el.description}
                              image={el.image}
                           />
                        ))}
                     </>
                  ) : (
                     <>
                        {Data.prasmanan.map((el, i) => (
                           <MenuCard
                              key={el.title}
                              title={el.title}
                              description={el.description}
                              image={el.image}
                           />
                        ))}
                     </>
                  )}
               </Flex>
            </Box>
         </Flex>
      </>
   );
};

export default Menu1;
