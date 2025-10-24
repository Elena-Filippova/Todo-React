import styles from './header.module.scss'
import { HeaderBlock, HeaderContainer, HeaderLink } from './Header.styled'

export const Header = () => {
  const getActiveClass = ({ isActive }: {isActive: boolean}): string => {
    return isActive ? `${styles.active} ${styles.link}` : styles.link
  }

  return (
    <HeaderBlock>
      <HeaderContainer>
        <HeaderLink 
          to='/'
        >ToDo</HeaderLink>
        <HeaderLink

          to='/list'
        >List</HeaderLink>
      </HeaderContainer>
    </HeaderBlock>
  )
}