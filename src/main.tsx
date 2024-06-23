import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/index.tsx';
import LoginPage from './pages/Login/index.tsx';
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
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
