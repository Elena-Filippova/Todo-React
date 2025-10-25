import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NotFoundWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  background-color: rgb(237, 240, 241);
`

export const NotFoundTitle = styled.h1`
  font-size: 64px;
  color: #4682b4;
`

export const NotFoundLink = styled(Link)`
  font-size: 24px;
  color: #4682b4;

  &:hover {
    color: #6ba9dd;
  }
`