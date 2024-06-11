import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages
import HomePage from '../pages/HomePage/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },

]);

const WebRouter = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default WebRouter;