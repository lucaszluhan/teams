import { Container } from './style'
import { InputProps } from './type'
import { useTheme } from 'styled-components/native'

export function Input({ inputRef, ...rest }: InputProps) {
  const { COLORS } = useTheme()

  return <Container ref={inputRef} placeholderTextColor={COLORS.GRAY_300} {...rest} />
}
