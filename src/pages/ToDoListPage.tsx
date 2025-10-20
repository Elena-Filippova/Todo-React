import { useState } from 'react'
import { ToDo } from '../assets/models/todo-item'
import { Form } from '../components/form/Form'
import { Header } from '../components/header/Header'
import { ToDoList } from '../components/toDoList/ToDoList'
import { ToastContainer, Zoom, toast } from 'react-toastify'

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([])

  const notifyCreate = () => toast('Create')
  const notifyUpdate = () => toast('Update')
  const notifyDelete = () => toast('Delete')

  const createNewToDo = (text: string) => {
    const newToDo: ToDo = {
      id: todos.length,
      text: text,
      isDone: false
    }
    notifyCreate()
    setTodos([...todos, newToDo])
  }

  const updateToDo = (toDoItem: ToDo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === toDoItem.id) {
        todo.isDone = !todo.isDone
      }

      return todo
    })
    notifyUpdate()
    setTodos(newTodos)
  }

  const deleteToDo = (toDoItem: ToDo) => {
    const newTodos = todos.filter((todo) => todo.id !== toDoItem.id)
    notifyDelete()
    setTodos(newTodos)
  }

  return (
    <>
      <Header />
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
      <ToastContainer 
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
    </>
  )
}