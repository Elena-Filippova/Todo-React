import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ToDo } from '../assets/models/todo-item'
import { toast } from 'react-toastify'

export interface TodoState {
  todos: ToDo[]
}

const initialState: TodoState = {
  todos: [],
}

const notifyCreate = () => toast('Create item')
const notifyUpdate = () => toast('Update item')
const notifyDelete = () => toast('Delete item')

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
      const newToDo: ToDo = {
        id: state.todos.length,
        text: action.payload,
        isDone: false
      }

      notifyCreate()
      state.todos = [...state.todos, newToDo]
    },
    updateAction: (state, action: PayloadAction<ToDo>) => {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
        todo.isDone = !todo.isDone
        }

        return todo
      })

      notifyUpdate()
      state.todos = newTodos
    },
    deleteAction: (state, action: PayloadAction<ToDo>) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload.id)
      notifyDelete()
      state.todos = newTodos
    },
  },
})

export const { createAction, updateAction, deleteAction } = todoSlice.actions
export default todoSlice.reducer