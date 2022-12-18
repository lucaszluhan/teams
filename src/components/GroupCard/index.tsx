import { Container, Icon, Title } from './style'
import { GroupCardProps } from './type'

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  )
}
