import { ButtonIcon } from '../ButtonIcon'
import { Container, Icon, Name } from './style'
import { PlayerCardProps } from './type'

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <Container>
      <Icon name='person' />
      <Name>{name}</Name>
      <ButtonIcon icon='close' variant='SECONDARY' onPress={onRemove} />
    </Container>
  )
}
