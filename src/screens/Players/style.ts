import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Form = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex-direction: row;
  border-radius: 6px;
`
