import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { ButtonIconStyleProps } from './type'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled(TouchableOpacity)`
  height: 56px;
  width: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`

export const Icon = styled(MaterialIcons).attrs<ButtonIconStyleProps>(({ theme, variant }) => ({
  size: 24,
  color: variant === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
}))``
