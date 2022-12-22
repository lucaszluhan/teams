import { Container, Icon } from './style'
import { ButtonIconProps } from './type'

export function ButtonIcon({ variant = 'PRIMARY', icon }: ButtonIconProps) {
  return (
    <Container>
      <Icon variant={variant} name={icon} />
    </Container>
  )
}
