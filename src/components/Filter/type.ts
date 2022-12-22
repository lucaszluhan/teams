import { TouchableOpacityProps } from 'react-native'

export interface FilterStyleProps {
  isActive?: boolean
}

export interface FilterProps extends FilterStyleProps, TouchableOpacityProps {
  title: string
}
