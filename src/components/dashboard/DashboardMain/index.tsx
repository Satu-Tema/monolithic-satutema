import type { ReactNode } from 'react';

import { Box } from '@chakra-ui/react';
import DashboardNavbar from '../DashboardNavbar';

type DashboardMainProps = {
   children: ReactNode;
};

const DashboardMain = ({ children }: DashboardMainProps) => (
   <Box as="main" flexGrow={1} minH="100vh" overflow="hidden">
      <DashboardNavbar />
      <Box>{children}</Box>
   </Box>
);

export default DashboardMain;
