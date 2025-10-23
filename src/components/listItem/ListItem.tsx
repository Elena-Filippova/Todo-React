import { Link } from 'react-router-dom'
import { ToDo } from '../../assets/models/todo-item'
import styles from './listItem.module.scss'

export const ListItem = ({ todo }: { todo: ToDo}) => {
  return (
      <Link
        className={`${styles.link} ${todo.isDone ? styles.done : styles.notDone}`} 
        to={`/list/${todo.id}`}
        rel='noreferrer'
      >{todo.text}</Link>
  )
}