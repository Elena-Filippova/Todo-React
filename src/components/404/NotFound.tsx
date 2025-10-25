import { NotFoundLink, NotFoundTitle, NotFoundWrapper } from "./NotFound.styled"

export const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>
        Page Not Found
      </NotFoundTitle>
      <NotFoundLink to='/'>Back to home</NotFoundLink>
    </NotFoundWrapper>
  )
}