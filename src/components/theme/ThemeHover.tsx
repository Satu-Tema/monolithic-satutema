import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RxCrossCircled } from 'react-icons/rx';

const ThemeHover = ({
   children,
   onClose,
   dataTestId,
}: {
   children: React.ReactElement;
   onClose: () => void;
   dataTestId?: string;
}) => {
   const [isHovered, setIsHovered] = useState(false);

   const handleMouseOver = () => setIsHovered(true);
   const handleMouseLeave = () => setIsHovered(false);

   return (
      <Box
         onMouseOver={handleMouseOver}
         onMouseLeave={handleMouseLeave}
         data-testid={`row-${dataTestId}`}
      >
         <Box mb="-30px" display={isHovered ? 'flex' : 'none'} justifyContent="end">
            <Button
               data-testid={`button-close-${dataTestId}`}
               colorScheme="red"
               size="sm"
               zIndex={100}
               onClick={onClose}
            >
               <RxCrossCircled size={25} />
            </Button>
         </Box>
         <Box pointerEvents="none">{children}</Box>
      </Box>
   );
};

export default ThemeHover;
