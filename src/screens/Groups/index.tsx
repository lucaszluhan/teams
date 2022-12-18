import { GroupCard, Header, Highlight } from '@components/index'
import { Container } from './style'

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='jogue com a sua turma' />
      <GroupCard title='Nome da turma' />
      <GroupCard title='Nome da turma' />
    </Container>
  )
}
