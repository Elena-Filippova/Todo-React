import { createBrowserRouter } from 'react-router-dom'
import { NotFound } from './pages/404'
import { Layout } from './layouts/Layout'
import { ViewList } from './pages/ViewList'
import { ToDoListPage } from './pages/ToDoListPage'
import { ViewListItem } from './pages/ViewListItem'

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <ToDoListPage />,
      },
      {
        path: '/list',
        element: <ViewList />,
      },
      {
        path: '/list/:id',
        element: <ViewListItem />,
      }
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])