import { TouchableOpacityProps } from 'react-native'

export interface ButtonStyleProps {
  variant: 'PRIMARY' | 'SECONDARY'
}

export interface ButtonProps extends TouchableOpacityProps {
  title: string
  variant?: ButtonStyleProps['variant']
}
