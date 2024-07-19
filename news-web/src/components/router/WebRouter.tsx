import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages
import HomePage from '../pages/PageMain/HomePage';
import Error from '../pages/PageMain/ErrorPage';
import EventPage from '../pages/PageMain/EventPage';
import SignIn from '../pages/UserPage/SignIn';
import NewDetail from '../pages/NewDetail';
import NewComponent from '../NewComponent';


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
  },{
    path:"/new/:id",
        element: <NewDetail/>
    },{
        path:"/test",
        element: <NewComponent/>
    }

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