import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Accessories } from './pages/Accessories.tsx';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/accessories',
    element: <Accessories />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
