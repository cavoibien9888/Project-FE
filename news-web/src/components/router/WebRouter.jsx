import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages
import HomePage from '../pages/HomePage/HomePage';
import Error from '../pages/ErrorPage/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <Error/>,
  },

]);

const WebRouter = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default WebRouter;


// export default WebRouter;