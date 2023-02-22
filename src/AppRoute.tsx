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

const AdminRoute = [
   {
      path: 'admin',
      component: <AdminDashboard />,
   },
   {
      path: 'admin/categories',
      component: <Categories />,
   },
];

const UserRoute = [
   {
      path: 'user',
      component: <UserDashboard />,
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
