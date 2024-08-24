import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Import the layouts
import RootLayout from './Layouts/Layout.jsx';
import DashboardLayout from './Layouts/UserLayout.jsx';
import NotFound from './Pages/404.jsx';
import Login from './auth/Login.jsx';
import Signup from './auth/SignUp.jsx';

// Import the components
import {PageInitial} from '@Pages/PageWelcome.jsx'
import {PageByIdComic} from '@Pages/PageComicRiding.jsx'
import {PageComic} from '@Pages/PageComic.jsx'
import {PageContactMail} from '@Pages/PageContact.jsx'
import {PageFavorites} from '@Pages/PageMyFavorites.jsx'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <PageInitial /> },
      { path: "/sign-in", element: <Login /> },
      { path: "/sign-up", element: <Signup /> },
      { path: "/comic/:id", element: <PageByIdComic /> },
      { path: "/comic/:id/:title", element: <PageComic /> },
      { path: "/pedidos", element: <PageContactMail /> },
      {
        element: <DashboardLayout />,
        children: [
          
          { path: "/MyFavorites", element: <PageFavorites /> },
        ]
      },
      { path: "*", element: <NotFound /> },
    ]
  }
]);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);