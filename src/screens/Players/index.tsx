import { ButtonIcon, Filter, Header, Highlight, Input } from '@components/index'
import { Container, Form } from './style'

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight title='Nome da turma' subtitle='adicione a galera e separe os times' />
      <Form>
        <Input placeholder='Nome da pessoa' autoCorrect={false} />
        <ButtonIcon icon='add' />
      </Form>
      <Filter title='Time A' isActive />
    </Container>
  )
}
