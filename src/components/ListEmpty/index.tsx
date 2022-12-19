import { Container, Message } from './style'
import { ListEmptyProps } from './type'

export function ListEmpty({ message }: ListEmptyProps) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  )
}
