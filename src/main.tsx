import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { HashRouter, Route, Routes } from 'react-router-dom';
// import {HomePage} from "./pages/HomePage.tsx";
// import {PhonesPage} from "./pages/PhonesPage.tsx";
// import {TabletsPage} from "./pages/TabletsPage.tsx";
// import {AccessoriesPage} from "./pages/AccessoriesPage.tsx";
// import {ProductItemPage} from "./pages/ProductItemPage.tsx";
// import {FavouritesPage} from "./pages/FavouritesPage.tsx";
// import {CartPage} from "./pages/CartPage.tsx";
// import { ErrorPage } from './pages/ErrorPage.tsx';
// import { ContactsPage } from './pages/ContactsPage.tsx';
// import { GithubPage } from './pages/GithubPage.tsx';
// import { RightsPage } from './pages/RightsPage.tsx';
import './index.css';
import { HomePage } from './pages/HomePage.tsx';
import { PhonesPage } from './pages/PhonesPage.tsx';
import { TabletsPage } from './pages/TabletsPage.tsx';
import { AccessoriesPage } from './pages/AccessoriesPage.tsx';
import { ErrorPage } from './pages/ErrorPage.tsx';

// const router = createHashRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {index: true, element: <Navigate to="/home" replace /> },
//       {
//         path: 'home',
//         element: <HomePage />,
//         index: true,
//       },
//       {
//         path: 'phones',
//         element: <PhonesPage />,
//       },
//       {
//         path: 'phones/:id',
//         element: <ProductItemPage />,
//       },
//       {
//         path: 'tablets',
//         element: <TabletsPage />,
//       },
//       {
//         path: 'tablets/:id',
//         element: <ProductItemPage />,
//       },
//       {
//         path: 'accessories',
//         element: <AccessoriesPage />,
//       },
//       {
//         path: 'favourites',
//         element: <FavouritesPage />,
//       },
//       {
//         path: 'cart',
//         element: <CartPage />,
//       },
//       {
//         path: 'contacts',
//         element: <ContactsPage />,
//       },
//       {
//         path: 'github',
//         element: <GithubPage />,
//       },
//       {
//         path: 'rights',
//         element: <RightsPage />,
//       },
//     ],
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}  >
          <Route index element={<HomePage />} />
          <Route path="/phones" element={<PhonesPage />} />
          <Route path="/tablets" element={<TabletsPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
