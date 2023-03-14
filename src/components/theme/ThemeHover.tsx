import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RxCrossCircled } from 'react-icons/rx';

const ThemeHover = ({
   children,
   onClose,
}: {
   children: React.ReactElement;
   onClose: () => void;
}) => {
   const [isHovered, setIsHovered] = useState(false);

   const handleMouseOver = () => setIsHovered(true);
   const handleMouseLeave = () => setIsHovered(false);

   return (
      <Box onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
         <Box mb="-30px" display={isHovered ? 'flex' : 'none'} justifyContent="end">
            <Button colorScheme="red" size="sm" zIndex={100} onClick={onClose}>
               <RxCrossCircled size={25} />
            </Button>
         </Box>
         <Box pointerEvents="none">{children}</Box>
      </Box>
   );
};

export default ThemeHover;
