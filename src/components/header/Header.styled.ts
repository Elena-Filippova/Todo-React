import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  display: flex;
  align-items: center;
  transition: background-color 0.2s ease-in-out;
`

export const HeaderContainer = styled.div`
  position: relative;
  max-width: 97%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  color: #ffffff;
`

export const HeaderControls = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`

export const HeaderControl = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 14px;
  outline: 2px solid #ffffff33;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.backgroundTertiary};
  color: ${({ theme }) => theme.colors.colorText};
  transition: all 0.2s ease-in-out;
`