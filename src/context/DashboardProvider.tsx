import { createContext, ReactNode, useContext, useEffect } from 'react';

import { useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { DashboardContextType, DashboardProviderProps } from 'ts/DashboardSidebar';

const DashboardContext = createContext({} as DashboardContextType);

export function useDashboard() {
   return useContext(DashboardContext);
}

const DashboardProvider = ({ children }: DashboardProviderProps) => {
   const { isOpen: isDesktopSidebarOpened, onToggle: onDesktopSidebarOpen } = useDisclosure({
      defaultIsOpen: true,
   });
   const {
      isOpen: isMobileSidebarOpened,
      onToggle: onMobileSidebarOpen,
      onClose: onMobileSidebarClose,
   } = useDisclosure({ defaultIsOpen: false });
   const isDesktop = useBreakpointValue({ base: false, md: true });

   function onToggle(): void {
      if (isDesktop) return onDesktopSidebarOpen();
      return onMobileSidebarOpen();
   }

   useEffect(() => {
      if (isDesktop) onMobileSidebarClose();
   }, [isDesktop]);

   return (
      <DashboardContext.Provider
         value={{
            isDesktopSidebarOpened,
            isMobileSidebarOpened,
            onSidebarToggle: onToggle,
         }}
      >
         {children}
      </DashboardContext.Provider>
   );
};

export default DashboardProvider;
