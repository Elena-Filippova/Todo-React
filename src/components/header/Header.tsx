import { NavLink } from 'react-router-dom'
import styles from './header.module.scss'

export const Header = () => {
  const getActiveClass = ({ isActive }: {isActive: boolean}): string => {
    return isActive ? `${styles.active} ${styles.link}` : styles.link
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink className={getActiveClass} to='/'>ToDo</NavLink>
        <NavLink className={getActiveClass} to='/list'>List</NavLink>
      </div>
    </header>
  )
}