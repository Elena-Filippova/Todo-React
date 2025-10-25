import { useDispatch } from 'react-redux'
import { HeaderBlock, HeaderContainer, HeaderControl, HeaderControls, HeaderLink } from './Header.styled'
import { toggleThemeAction } from '../../feature/themeList'

export const Header = () => {
  /*const getActiveClass = ({ isActive }: {isActive: boolean}): string => {
    return isActive ? `${styles.active} ${styles.link}` : styles.link
  }*/

  const dispatch = useDispatch()

  return (
    <HeaderBlock>
      <HeaderContainer>
        <HeaderLink 
          to='/'
        >ToDo</HeaderLink>
        <HeaderLink

          to='/list'
        >List</HeaderLink>
        <HeaderControls>
          <HeaderControl onClick={() => dispatch(toggleThemeAction())}>
            Toggle
          </HeaderControl>
        </HeaderControls>
      </HeaderContainer>
    </HeaderBlock>
  )
}