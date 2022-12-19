import { Groups, NewGroup, Players } from '@screens/index'
import { ThemeProvider } from 'styled-components'
import { theme } from '@theme/index'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from '@components/index'
import { StatusBar } from 'react-native'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent />
      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  )
}
