import Home from 'pages/Home';
import { Route, Routes } from 'react-router';
import ProtectedRoute from 'utils/ProtectedRoute';
import { BrowserRouter } from 'react-router-dom';
import Login from 'pages/auth/Login';
import Register from 'pages/auth/Register';
import CreateWebsite from 'pages/CreateWebsite';
import AdminDashboard from 'pages/admin';
import NotFound from 'pages/404';
import UserDashboard from 'pages/user';
import Categories from 'pages/admin/categories';
import Theme from 'pages/admin/theme';
import ThemeEditor from 'pages/admin/theme/ThemeEditor';
import SettingDashboard from 'pages/user/setting';
import FeatureDashboard from 'pages/user/feature';
import TestimonyDashboard from 'pages/user/testimony';
import GalleryDashboard from 'pages/user/gallery';
import ProductDashboard from 'pages/user/product';
import ChoseTheme from 'pages/user/chosetheme';

const AdminRoute = [
   {
      path: 'admin',
      component: <AdminDashboard />,
   },
   {
      path: 'admin/categories',
      component: <Categories />,
   },
   {
      path: 'admin/theme',
      component: <Theme />,
   },
   {
      path: 'admin/theme-editor/:id',
      component: <ThemeEditor />,
   },
];

const UserRoute = [
   {
      path: 'user',
      component: <UserDashboard />,
   },
   {
      path: 'user/setting',
      component: <SettingDashboard />,
   },
   {
      path: 'user/feature',
      component: <FeatureDashboard />,
   },
   {
      path: 'user/testimony',
      component: <TestimonyDashboard />,
   },
   {
      path: 'user/gallery',
      component: <GalleryDashboard />,
   },
   {
      path: 'user/product',
      component: <ProductDashboard />,
   },
   {
      path: 'user/theme',
      component: <ChoseTheme />,
   },
];

const AppRoute = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/register/create" element={<CreateWebsite />} />

            {/* admin */}
            {AdminRoute.map((el, i) => (
               <Route
                  key={i}
                  path={el.path}
                  element={<ProtectedRoute isAllowed={'admin'}>{el.component}</ProtectedRoute>}
               />
            ))}

            {/* user */}
            {UserRoute.map((el, i) => (
               <Route
                  key={i}
                  path={el.path}
                  element={<ProtectedRoute isAllowed={'user'}>{el.component}</ProtectedRoute>}
               />
            ))}

            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
};

export default AppRoute;
