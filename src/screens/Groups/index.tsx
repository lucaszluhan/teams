import { Button, GroupCard, Header, Highlight, ListEmpty, Loading } from '@components/index'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { groupsGetAll } from '@storage/group/groupsGetAll'
import { useCallback, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { Container } from './style'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(true)

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)
      const data = await groupsGetAll()
      setGroups(data)
    } catch (error) {
      console.log(error)
      Alert.alert('Turmas', 'Não foi possivel carregar as turmas.')
    } finally {
      setIsLoading(false)
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
      setIsLoading(false)
    }, [])
  )

  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='jogue com a sua turma' />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          ListEmptyComponent={() => <ListEmpty message='Que tal cadastrar uma turma?' />}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
        />
      )}
      <Button title='Criar nova turma' onPress={handleNewGroup} />
    </Container>
  )
}
