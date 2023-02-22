import { FiBook, FiSettings } from 'react-icons/fi';
import { DashboardSidebarNavItem } from 'ts/DashboardSidebar';

function generateSidebarItemsUsers(): DashboardSidebarNavItem[] {
   return [
      {
         name: 'Dashboard',
         path: '/user',
         icon: FiBook,
      },
      {
         name: 'Pengaturan',
         path: '/user/setting',
         icon: FiSettings,
      },
   ];
}

export default generateSidebarItemsUsers;
