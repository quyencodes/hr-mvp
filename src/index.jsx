import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import About from './About'
import Layout from './Layout'
import Contact from './Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/layout',
    element: <Layout />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
