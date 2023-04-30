import {
   Container,
   SimpleGrid,
   Image,
   Flex,
   Heading,
   Text,
   Stack,
   StackDivider,
   Icon,
   useColorModeValue,
} from '@chakra-ui/react';
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5';
import { ReactElement } from 'react';

interface FeatureProps {
   text: string;
   iconBg: string;
   icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
   return (
      <Stack direction={'row'} align={'center'}>
         <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
            {icon}
         </Flex>
         <Text fontWeight={600}>{text}</Text>
      </Stack>
   );
};

interface IFeature1 {
   title?: string;
   description?: string;
   imageFeature?: string;
}

export default function Feature1({ title, description, imageFeature }: IFeature1) {
   return (
      // <Container maxW={'5xl'} py={12}>
      <SimpleGrid id="#tentang" columns={{ base: 1, md: 2 }} spacing={10} mt={10}>
         {/* <Stack spacing={4}> */}
         <Flex flex={1} p={8}>
            <Image
               rounded={'md'}
               alt={'feature image'}
               src={
                  imageFeature ??
                  'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
               }
               objectFit={'cover'}
            />
         </Flex>
         <Stack p={8} spacing={6} w={'full'} maxW={'lg'}>
            <Text
               textTransform={'uppercase'}
               color={'blue.400'}
               fontWeight={600}
               fontSize={'sm'}
               bg={useColorModeValue('blue.50', 'blue.900')}
               p={2}
               alignSelf={'flex-start'}
               rounded={'md'}
            >
               Tentang Kami
            </Text>
            <Heading>{title ?? 'A digital Product design agency'}</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
               {description ??
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'}
            </Text>
         </Stack>
      </SimpleGrid>
      // </Container>
   );
}
