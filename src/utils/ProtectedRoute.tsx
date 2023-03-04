import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, To } from 'react-router-dom';

const ProtectedRoute = ({
   isAllowed,
   redirectPath = '/',
   children,
}: {
   isAllowed: String;
   redirectPath?: To;
   children: React.ReactElement;
}) => {
   // check auth with redux (user authorization)
   const user = useSelector((state: any) => state.user);
   if (!user.isAuth) {
      if (isAllowed.includes(user.value.authorize)) {
         return <Navigate to={redirectPath} replace />;
      } else {
         return <Navigate to="/" replace />;
      }
   }

   return children;
};

export default ProtectedRoute;
