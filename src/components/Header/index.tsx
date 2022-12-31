import { BackButton, BackIcon, Container, Logo } from './style'
import { HeaderProps } from './type'
import logoImg from '@assets/logo.png'
import { useNavigation } from '@react-navigation/native'

export function Header({ showBackButton }: HeaderProps) {
  const navigation = useNavigation()

  function handleBackButton() {
    return (
      showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )
    )
  }

  function handleGoBack() {
    navigation.navigate('groups')
  }

  return (
    <Container>
      {handleBackButton()}
      <Logo source={logoImg} />
    </Container>
  )
}
