import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages
import HomePage from '../pages/PageMain/HomePage';
import Error from '../pages/PageMain/ErrorPage';
import EventPage from '../pages/PageMain/EventPage';
import SignIn from '../pages/UserPage/SignIn';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <Error/>,
  },
  {
    path: "/su-kien",
    element: <EventPage/>,
  },
  {
    path: "/dang-nhap",
    element: <SignIn/>,
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