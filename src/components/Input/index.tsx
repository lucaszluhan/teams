import { Container } from './style'
import { InputProps } from './type'

export function Input({ ...rest }: InputProps) {
  return <Container {...rest}></Container>
}
