import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { createHashRouter } from 'react-router-dom';
import App from './App.tsx';
import { HomePage } from 'pages/HomePage.tsx';
import { ErrorPage } from 'pages/ErrorPage.tsx';
import { PhonesPage } from 'pages/PhonesPage.tsx';
import { ProductItemPage } from 'pages/ProductItemPage.tsx';
import { TabletsPage } from 'pages/TabletsPage.tsx';
import { AccessoriesPage } from 'pages/AccessoriesPage.tsx';
import { FavouritesPage } from 'pages/FavouritesPage.tsx';
import { CartPage } from 'pages/CartPage.tsx';
import { ContactsPage } from 'pages/ContactsPage.tsx';
import { GithubPage } from 'pages/GithubPage.tsx';
import { RightsPage } from 'pages/RightsPage.tsx';
import './index.css';

import { ThemeProvider } from '@material-tailwind/react';
import { BasketPage } from './pages/BasketPage.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
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
      {
        path: 'basket',
        element: <BasketPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
