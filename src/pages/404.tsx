import { Box, Heading, Text, Button, Center } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
   const navigate = useNavigate();
   return (
      <Box textAlign="center" py={10} px={6}>
         <Center>
            <img
               loading="lazy"
               alt="Satu Tema"
               src={`${process.env.PUBLIC_URL}/images/clock.png`}
               style={{ objectFit: 'cover' }}
               width={350}
               height={200}
            />
         </Center>
         <Text fontSize="18px" mt={3} mb={2}>
            Page Not Found
         </Text>
         <Text color={'gray.500'} mb={6}>
            The page youre looking for does not seem to exist
         </Text>

         <Button
            colorScheme="blue"
            bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
            color="white"
            variant="solid"
            onClick={() => navigate('/')}
         >
            Go to Home
         </Button>
      </Box>
   );
}
