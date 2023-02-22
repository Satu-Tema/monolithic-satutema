import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
   const navigate = useNavigate();
   return (
      <Box textAlign="center" mt={180} py={10} px={6}>
         <Heading
            display="inline-block"
            as="h2"
            size="2xl"
            bgGradient="linear(to-r, blue, blue)"
            backgroundClip="text"
         >
            404
         </Heading>
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
