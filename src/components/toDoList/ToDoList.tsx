import { ToDoListItem } from './toDoListItem/ToDoListItem'
import { ToDo } from '../../assets/models/todo-item'
import { ToDoListCompleted, ToDoListContainer, ToDoListFailed } from './toDoList.styled'

export const ToDoList = (props: {todos: ToDo[], updateToDo: Function, deleteToDo: Function}) => {
  
  const checkedList = () => {
    return props.todos
            .filter((item) => !item.isDone)
            .map((item, index) => {
              return (
                <ToDoListItem 
                  toDoItem={item} 
                  key={index} 
                  updateToDo={props.updateToDo} 
                  deleteToDo={props.deleteToDo} 
                />
              )
          })
  }

  const uncheckedList = () => {
    return props.todos
            .filter((item) => item.isDone)
            .map((item, index) => {
              return (
                <ToDoListItem 
                  toDoItem={item} 
                  key={index} 
                  updateToDo={props.updateToDo} 
                  deleteToDo={props.deleteToDo}
                />
              )
          })
  }

  return (
    <ToDoListContainer>
      <ToDoListFailed>
        {checkedList()}
      </ToDoListFailed>
      <ToDoListCompleted>
        {uncheckedList()}
      </ToDoListCompleted>
    </ToDoListContainer>
  )
}