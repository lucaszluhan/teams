import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { ButtonStyleProps } from './type'

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: ${({ theme, variant }) =>
    variant === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
