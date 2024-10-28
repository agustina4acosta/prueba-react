import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import PostDetail from './pages/PostDetail'

import Login from './pages/Login'
import Profile from './pages/Profile'




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

     ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

