import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

interface IMenuCard {
   title: string;
   description: string;
   image: string;
}

const MenuCard = ({ title, description, image }: IMenuCard) => {
   return (
      <Flex
         flexDirection={{ base: 'column', md: 'row' }}
         alignItems={{ base: 'center', md: 'start' }}
         mb={5}
         h="auto"
         w={72}
         textAlign="left"
         p={5}
         background="#fff"
         rounded="lg"
         border={1}
         shadow="md"
         maxW={{ base: 'auto', md: '36rem' }}
      >
         <Box mt={5}>
            <Image
               height={150}
               width={180}
               objectFit="cover"
               rounded="full"
               src={image}
               alt={title}
            />
         </Box>
         <Flex flexDirection="column" w={80} justifyContent="space-between" p={4}>
            <Heading
               mb={2}
               fontSize={18}
               fontWeight="semibold"
               textAlign={{ base: 'center', md: 'left' }}
            >
               {title}
            </Heading>
            <Text fontSize={14} textAlign={{ base: 'center', md: 'left' }}>
               {description}
            </Text>
         </Flex>
      </Flex>
   );
};

export default MenuCard;
