import { Button, GroupCard, Header, Highlight, ListEmpty } from '@components/index'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { Container } from './style'

export function Groups() {
  const [groups, setGroups] = useState([])
  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }

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
