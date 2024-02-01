import React from 'react';
import ReactDOM from 'react-dom/client';
import {createHashRouter, Navigate, RouterProvider} from 'react-router-dom';
import App from './App.tsx';
import {HomePage} from "./pages/HomePage.tsx";
import {PhonesPage} from "./pages/PhonesPage.tsx";
import {TabletsPage} from "./pages/TabletsPage.tsx";
import {AccessoriesPage} from "./pages/AccessoriesPage.tsx";
import {ProductItemPage} from "./pages/ProductItemPage.tsx";
import {FavouritesPage} from "./pages/FavouritesPage.tsx";
import {CartPage} from "./pages/CartPage.tsx";
import './index.css';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Navigate to="/home" replace /> },
      {
        path: 'home',
        element: <HomePage />,
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
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
