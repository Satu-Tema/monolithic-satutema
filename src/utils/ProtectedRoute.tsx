import React from 'react';
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
   if (!isAllowed) {
      return <Navigate to={redirectPath} replace />;
   }

   return children;
};

export default ProtectedRoute;
