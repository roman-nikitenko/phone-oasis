import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { createHashRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';
import App from './App.tsx';
import { HomePage } from 'pages/HomePage.tsx';
import { ErrorPage } from 'pages/ErrorPage.tsx';
import { ProductsPage } from 'pages/ProductsPage.tsx';
import { ProductItemPage } from 'pages/ProductItemPage.tsx';
import { FavouritesPage } from 'pages/FavouritesPage.tsx';
import { BasketPage } from 'pages/BasketPage.tsx';
import { ContactsPage } from 'pages/ContactsPage.tsx';
import { GithubPage } from 'pages/GithubPage.tsx';
import { RightsPage } from 'pages/RightsPage.tsx';
import './index.css';
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
        element: <ProductsPage />,
      },
      {
        path: 'phones/:phoneName',
        element: <ProductItemPage />,
      },
      {
        path: 'tablets',
        element: <ProductsPage />,
      },
      {
        path: 'tablets/:tabletName',
        element: <ProductItemPage />,
      },
      {
        path: 'accessories',
        element: <ProductsPage />,
      },
      {
        path: 'accessories/:accessoryName',
        element: <ProductItemPage />,
      },
      {
        path: 'favourites',
        element: <FavouritesPage />,
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
