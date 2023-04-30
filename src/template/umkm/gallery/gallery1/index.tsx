import { Heading, Container, Image, Box, BoxProps, useColorModeValue } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';

const galleries = [
   'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
   'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
   'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
   'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
   'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
   'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
   'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
   'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
   'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
   'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
];

export default function Gallery1({ data = [] }: { data?: [] }) {
   const MotionBox = motion<BoxProps>(Box);

   return (
      <>
         <Container bg="white" minH="100" maxW="1440" p="20px 40px 30px 40px">
            {data && data.length < 1 && (
               <Heading
                  fontFamily={'Work Sans'}
                  fontWeight={'bold'}
                  color={useColorModeValue('gray.700', 'gray.50')}
                  textAlign="center"
                  my={6}
               >
                  Gallery
               </Heading>
            )}

            <Box py="20px" w="100%" maxW="100%" mx="auto" bg="white">
               <Box display="flex" flexWrap="wrap">
                  {data && data.length > 1
                     ? data.map((data: any, index: number) => (
                          <Box key={index} w="50%" p={{ base: 1, md: 2 }} cursor="pointer">
                             <Image
                                // pb={{ base: '5.5vw', ts: '4.5vw', sm: '2vw' }}
                                w="100%"
                                // minW={150}
                                // maxW={150}
                                src={data}
                                alt={`Gallery ke-${index}`}
                             />
                          </Box>
                       ))
                     : galleries.map((data: any, index: number) => (
                          <Box key={index} w="50%" p={{ base: 1, md: 2 }} cursor="pointer">
                             <Image
                                // pb={{ base: '5.5vw', ts: '4.5vw', sm: '2vw' }}
                                w="100%"
                                // minW={150}
                                // maxW={150}
                                src={data}
                                alt={`Gallery ke-${index}`}
                             />
                          </Box>
                       ))}
               </Box>
            </Box>
         </Container>
      </>
   );
}

const variants: Variants = {
   hidden: {
      opacity: 0,
      y: -30,
   },
   visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: Math.random() * (1 - 0.5 + 1) + 0.1, duration: 2 },
   }),
};
