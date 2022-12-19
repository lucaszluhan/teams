import { Container, Title } from './style'
import { ButtonProps } from './type'

export function Button({ title, variant = 'PRIMARY', ...rest }: ButtonProps) {
  return (
    <Container variant={variant} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
