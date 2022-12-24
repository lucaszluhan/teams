import {
  ButtonIcon,
  Filter,
  Header,
  Highlight,
  Input,
  ListEmpty,
  PlayerCard,
} from '@components/index'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { Container, Form, HeaderList, PlayersNumb } from './style'

export function Players() {
  const [team, setTeam] = useState('time a')
  const [players, setPlayers] = useState([])

  return (
    <Container>
      <Header showBackButton />
      <Highlight title='Nome da turma' subtitle='adicione a galera e separe os times' />
      <Form>
        <Input placeholder='Nome da pessoa' autoCorrect={false} />
        <ButtonIcon icon='add' />
      </Form>
      <HeaderList>
        <FlatList
          data={['time a', 'time b']}
          keyExtractor={(time) => time}
          renderItem={({ item }) => (
            <Filter title={item} isActive={item === team} onPress={() => setTeam(item)} />
          )}
          horizontal
        />
        <PlayersNumb>{players.length}</PlayersNumb>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <PlayerCard name={item} onRemove={() => {}} />}
        ListEmptyComponent={() => <ListEmpty message='Não há pessoas nessse time.' />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
      />
    </Container>
  )
}
