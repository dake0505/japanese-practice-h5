import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/index.tsx';
import './index.css';
import Home from './pages/Home/index.tsx';
import N1Index from './pages/N1/index.tsx';
import N2Detail from './pages/N2/Detail/index.tsx';
import N2Index from './pages/N2/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/n2',
    children: [
      {
        path: '',
        element: <N2Index />,
      },
      {
        path: 'detail',
        element: <N2Detail />,
      },
    ],
  },
  {
    path: '/n1',
    element: <N1Index />,
    children: [],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <main className="grid min-h-full bg-white px-6 py-2">
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>
);
