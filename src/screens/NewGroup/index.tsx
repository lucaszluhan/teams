import { Button, Header, Highlight, Input } from '@components/index'
import { useNavigation } from '@react-navigation/native'
import { Container, Content, Icon } from './style'

export function NewGroup() {
  const navigation = useNavigation()

  function handleNewNavigation() {
    navigation.navigate('players', { group: 'teste' })
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight title='Nova turma' subtitle='crie uma turma para adicionar pessoas' />
        <Input placeholder='Nome da turma' />
        <Button title='Criar' onPress={handleNewNavigation} />
      </Content>
    </Container>
  )
}
