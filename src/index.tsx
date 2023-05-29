import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import Form from './components/Form';
import HomeContainer from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeContainer />,
  },
  {
    path: '/form',
    element: <Form />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
