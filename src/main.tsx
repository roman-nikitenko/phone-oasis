import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navigate, RouterProvider } from 'react-router';
import { createHashRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      {
        path: 'home',
        element: <HomePage />,
        index: true,
      },
      {
        path: 'phones',
        element: <PhonesPage />,
      },
      {
        path: 'phones/:id',
        element: <ProductItemPage />,
      },
      {
        path: 'tablets',
        element: <TabletsPage />,
      },
      {
        path: 'tablets/:id',
        element: <ProductItemPage />,
      },
      {
        path: 'accessories',
        element: <AccessoriesPage />,
      },
      {
        path: 'favourites',
        element: <FavouritesPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
      },
      {
        path: 'github',
        element: <GithubPage />,
      },
      {
        path: 'rights',
        element: <RightsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
