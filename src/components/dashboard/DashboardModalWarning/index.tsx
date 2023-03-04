import type { ReactNode } from 'react';

import {
   Button,
   ButtonGroup,
   Icon,
   Modal,
   ModalBody,
   ModalContent,
   ModalFooter,
   ModalHeader,
   ModalOverlay,
   VStack,
   Text,
   Stack,
} from '@chakra-ui/react';
import { IoWarningOutline } from 'react-icons/io5';
import { ModalWarningProps } from 'ts/Modal';

const ModalWarning = ({
   isOpen,
   onClose,
   buttonText,
   buttonOnClick,
   isLoading = false,
   children,
}: ModalWarningProps): JSX.Element => {
   return (
      <Modal size="sm" isOpen={isOpen} onClose={onClose} closeOnOverlayClick={!isLoading}>
         <ModalOverlay />
         <ModalContent maxW={['calc(100vw - 30px)', 'sm']}>
            <ModalHeader>
               <VStack>
                  <Icon as={IoWarningOutline} fontSize="9xl" color="red" />
                  <Text>Warning</Text>
               </VStack>
            </ModalHeader>
            <ModalBody>
               <Text fontSize="sm" textAlign="center">
                  {children}
               </Text>
            </ModalBody>
            <ModalFooter>
               <ButtonGroup display="flex" flexGrow={1}>
                  <Stack w="full" flexDirection={['column', 'row']} alignItems="baseline">
                     <Button
                        w={'full'}
                        mr={[0, '10px']}
                        flexGrow={1}
                        variant="outline"
                        rounded="md"
                        onClick={onClose}
                        isDisabled={isLoading}
                     >
                        Batal
                     </Button>
                     <Button
                        w={'full'}
                        flexGrow={1}
                        colorScheme="red"
                        rounded="md"
                        onClick={buttonOnClick}
                        isLoading={isLoading}
                     >
                        {buttonText}
                     </Button>
                  </Stack>
               </ButtonGroup>
            </ModalFooter>
         </ModalContent>
      </Modal>
   );
};

export default ModalWarning;
