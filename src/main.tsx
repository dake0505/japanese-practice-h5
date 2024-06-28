import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import FavoriteList from './pages/FavoriteList/index.tsx';
import Home from './pages/Home/index.tsx';
import LoginPage from './pages/Login/index.tsx';
import MistakeList from './pages/MistakeList/index.tsx';
import ProfilePage from './pages/Profile/index.tsx';
import QuestionDetailPage from './pages/QuestionDetail/index.tsx';
import QuestionList from './pages/QuestionList/index.tsx';
import TypeList from './pages/TypeList/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/typeList',
    element: <TypeList />,
  },
  {
    path: '/questionList',
    element: <QuestionList />,
  },
  {
    path: '/questionDetail',
    element: <QuestionDetailPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/favorite',
    element: <FavoriteList />,
  },
  {
    path: '/mistake',
    element: <MistakeList />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
