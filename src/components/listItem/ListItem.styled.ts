import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ListItemLink = styled(Link)<{ $linkColor?: string}>`
  padding: 10px;
  text-decoration: none;
  color: ${(props) => props.$linkColor || 'green' || 'red'}
`



