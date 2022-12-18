import { BackButton, BackIcon, Container, Logo } from './style'
import { HeaderProps } from './type'
import logoImg from '@assets/logo.png'

export function Header({ showBackButton }: HeaderProps) {
  function handleBackButton() {
    return (
      showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )
    )
  }

  return (
    <Container>
      {handleBackButton()}
      <Logo source={logoImg} />
    </Container>
  )
}
