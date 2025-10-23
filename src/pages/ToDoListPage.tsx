import { ToDo } from '../assets/models/todo-item'
import { Form } from '../components/form/Form'
import { ToDoList } from '../components/toDoList/ToDoList'
import { RootState } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, Zoom } from 'react-toastify'
import { createAction, deleteAction, updateAction } from '../feature/todoList'

export const ToDoListPage = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos)
  const dispatch = useDispatch()

  const createNewToDo = (text: string) => {
    dispatch(createAction(text))
  }

  const updateToDo = (toDoItem: ToDo) => {
    dispatch(updateAction(toDoItem))
  }

  const deleteToDo = (toDoItem: ToDo) => {
    dispatch(deleteAction(toDoItem))
  }

  return (
    <>
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo} />
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