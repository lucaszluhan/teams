import { Container } from './style'
import { InputProps } from './type'
import { useTheme } from 'styled-components/native'

export function Input({ ...rest }: InputProps) {
  const { COLORS } = useTheme()

  return <Container placeholderTextColor={COLORS.GRAY_300} {...rest} />
}
