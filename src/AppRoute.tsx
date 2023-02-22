import React from 'react';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router';
import ProtectedRoute from 'utils/ProtectedRoute';
import { BrowserRouter } from 'react-router-dom';
import Login from 'pages/auth/Login';
import Register from 'pages/auth/Register';
import CreateWebsite from 'pages/CreateWebsite';
import AdminDashboard from 'pages/admin';
import NotFound from 'pages/404';

const AppRoute = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/register/create" element={<CreateWebsite />} />
            <Route
               path="admin"
               element={
                  <ProtectedRoute isAllowed={'admin'}>
                     <AdminDashboard />
                  </ProtectedRoute>
               }
            />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
};

export default AppRoute;
