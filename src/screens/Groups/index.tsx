import { Button, GroupCard, Header, Highlight, ListEmpty } from '@components/index'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { groupsGetAll } from '@storage/group/groupsGetAll'
import { AppError } from '@utils/AppError'
import { useCallback, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { Container } from './style'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll()
      setGroups(data)
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, [])
  )

  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='jogue com a sua turma' />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => <ListEmpty message='Que tal cadastrar uma turma?' />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />
      <Button title='Criar nova turma' onPress={handleNewGroup} />
    </Container>
  )
}
