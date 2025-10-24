import { ToDo } from '../../assets/models/todo-item'
import { ListItemLink } from './ListItem.styled'

export const ListItem = ({ todo }: { todo: ToDo}) => {
  return (
      <ListItemLink $linkColor={`${todo.isDone ? 'green' : 'red'}`} 
        to={`/list/${todo.id}`}
        rel='noreferrer'
      >{todo.text}</ListItemLink>
  )
}