import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToDoListPage } from './pages/ToDoListPage'
import { HomePage } from './pages/HomePage'
import './assets/scss/normalize.scss'
import './assets/scss/style.scss'
import { ToDo } from './assets/models/todo-item'
import { NotFound } from './pages/404'
import { ItemDescriptionPage } from './pages/ItemDescriptionPage'
import { Layout } from './layouts/Layout'

const todos: ToDo[] = [
  {
    id: 0,
    text: 'Первое задание',
    isDone: false,
  },
  {
    id: 1,
    text: 'Второе задание',
    isDone: true,
  },
  {
    id: 2,
    text: 'Третье задание',
    isDone: false,
  },
  {
    id: 3,
    text: 'Четвертое задание',
    isDone: true,
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage todos={todos} />,
      },
      {
        path: '/todo',
        element: <ToDoListPage />,
      },
      {
        path: '/list/:id',
        element: <ItemDescriptionPage todos={todos} />,
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />,
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
