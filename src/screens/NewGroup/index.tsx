import { Button, Header, Highlight, Input } from '@components/index'
import { Container, Content, Icon } from './style'

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight title='Nova turma' subtitle='crie uma turma para adicionar pessoas' />
        <Input />
        <Button title='Criar' />
      </Content>
    </Container>
  )
}
