import { ReactNode } from 'react';

export type ModalWarningProps = {
   isOpen: boolean;
   onClose: () => void;
   buttonText: string;
   buttonOnClick: () => void;
   isLoading?: boolean;
   children: ReactNode;
};
