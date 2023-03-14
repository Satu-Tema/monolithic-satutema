import { BsChatLeftDots, BsShop } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';
import { FiHome, FiSettings } from 'react-icons/fi';
import { TfiGallery } from 'react-icons/tfi';
import { MdFoodBank } from 'react-icons/md';
import { DashboardSidebarNavItem } from 'ts/DashboardSidebar';

function generateSidebarItemsUsers(): DashboardSidebarNavItem[] {
   return [
      {
         name: 'Dashboard',
         path: '/user',
         icon: FiHome,
      },
      {
         name: 'Pengaturan Website',
         path: '/user/setting',
         icon: FiSettings,
      },
      {
         name: 'Toko',
         path: '/user/shop',
         icon: BsShop,
      },
      {
         name: 'Produk',
         path: '/user/product',
         icon: MdFoodBank,
      },
      {
         name: 'Galeri',
         path: '/user/gallery',
         icon: TfiGallery,
      },
      {
         name: 'Testimoni',
         path: '/user/testimony',
         icon: BsChatLeftDots,
      },
      {
         name: 'Tema',
         path: '/user/theme',
         icon: FaLaptopCode,
      },
   ];
}

export default generateSidebarItemsUsers;
