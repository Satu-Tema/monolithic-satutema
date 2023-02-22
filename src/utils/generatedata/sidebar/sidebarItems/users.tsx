import { FiActivity, FiBook, FiDollarSign, FiMessageCircle } from 'react-icons/fi';
import { DashboardSidebarNavItem } from 'ts/DashboardSidebar';

function generateSidebarItemsUsers(): DashboardSidebarNavItem[] {
   return [
      {
         name: 'Kursus',
         path: '/user',
         icon: FiBook,
      },
      {
         name: 'Pertanyaan',
         path: '/user/qna',
         icon: FiMessageCircle,
         badge: '180',
      },
      {
         name: 'Pendapatan Instruktur',
         path: '/user/instructor-revenue',
         icon: FiActivity,
      },
      {
         name: 'Saldo Pendapatan',
         path: '/user/saldo',
         icon: FiDollarSign,
      },
   ];
}

export default generateSidebarItemsUsers;
