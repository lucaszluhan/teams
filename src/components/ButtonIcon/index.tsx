import { Container, Icon } from './style'
import { ButtonIconProps } from './type'

export function ButtonIcon({ variant = 'PRIMARY', icon, ...rest }: ButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon variant={variant} name={icon} />
    </Container>
  )
}
