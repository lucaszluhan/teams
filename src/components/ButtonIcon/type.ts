import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export interface ButtonIconStyleProps {
  variant: 'PRIMARY' | 'SECONDARY'
}

export interface ButtonIconProps extends TouchableOpacityProps {
  variant?: ButtonIconStyleProps['variant']
  icon: keyof typeof MaterialIcons.glyphMap
}
