import { Button, Header, Highlight, Input } from '@components/index'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Container, Content, Icon } from './style'

export function NewGroup() {
  const navigation = useNavigation()
  const [group, setGroup] = useState('')

  function handleNewNavigation() {
    navigation.navigate('players', { group })
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight title='Nova turma' subtitle='crie uma turma para adicionar pessoas' />
        <Input placeholder='Nome da turma' onChangeText={setGroup} />
        <Button title='Criar' onPress={handleNewNavigation} />
      </Content>
    </Container>
  )
}
