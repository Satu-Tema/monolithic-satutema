import { BiCategory, BiHome } from 'react-icons/bi';
import { FaLaptopCode } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

import { DashboardSidebarNavItem } from 'ts/DashboardSidebar';

function generateSidebarItemsAdmin(): DashboardSidebarNavItem[] {
   return [
      { name: 'Dashboard', path: '/admin', icon: BiHome },
      {
         name: 'Kategori',
         path: '/admin/categories',
         icon: BiCategory,
      },
      {
         name: 'Tema',
         path: '/admin/theme',
         icon: FaLaptopCode,
      },
      // {
      //    name: 'Pengaturan',
      //    path: '/',
      //    icon: FiSettings,
      //    sub: [
      //       {
      //          name: 'Pengaturan Sistem',
      //          path: '/admin/system-settings',
      //       },
      //       {
      //          name: 'Pengaturan Website',
      //          path: '/admin/frontend-settings',
      //       },
      //    ],
      // },
   ];
}

export default generateSidebarItemsAdmin;
