import { createBrowserRouter } from 'react-router-dom'
import { NotFoundPage } from './pages/404'
import { Layout } from './layouts/Layout'
import { ViewList } from './pages/ViewList'
import { ToDoListPage } from './pages/ToDoListPage'
import { ViewListItem } from './pages/ViewListItem'

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFoundPage />,
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
    element: <NotFoundPage />,
  },
])