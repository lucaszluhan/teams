import { Container, SubTitle, Title } from './style'
import { HighlightProps } from './type'

export function Highlight({ title, subtitle }: HighlightProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  )
}
