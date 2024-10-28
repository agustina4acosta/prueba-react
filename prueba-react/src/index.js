import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout.jsx'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import Login from './pages/Login'
import Profile from './pages/Profile.jsx'
import Users from './pages/Users.jsx'
import ErrorPage from './pages/ErrorPage.jsx'





const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
     errorElement: <ErrorPage/>,
    children: [
      {
        index: true, element: <Home/>
      },
      {
        path: "posts/:id", element: <PostDetail/>
      },
      {
        path: "login", element: <Login/>
      },
      {
        path: "profile/:id", element: <Profile/>
      },
      {
        path: "users", element: <Users/>
      },

     ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

