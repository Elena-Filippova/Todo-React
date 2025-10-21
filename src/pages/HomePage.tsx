import { ToDo } from '../assets/models/todo-item'
import { ListItem } from '../components/listItem/ListItem'

interface ComponentProps {
  todos: ToDo[]
}

export const HomePage = ({ todos }: ComponentProps) => {
  return (
    <div className='container'>
      {
        todos.map((todo: ToDo, index: number) => {
          return (<ListItem todo={todo} key={index} />)
        })
      }
    </div>
  )
}