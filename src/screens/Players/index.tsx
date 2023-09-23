import {
  Button,
  ButtonIcon,
  Filter,
  Header,
  Highlight,
  Input,
  ListEmpty,
  Loading,
  PlayerCard,
} from '@components/index'
import { useNavigation, useRoute } from '@react-navigation/native'
import { addPlayerByGroup } from '@storage/players/addPlayerByGroup'
import { getPlayersByGroupAndTeam } from '@storage/players/getPlayersByGroupAndTeam'
import { PlayerStorageDTO } from '@storage/players/PlayerStorageDTO'
import { AppError } from '@utils/AppError'
import { useEffect, useRef, useState } from 'react'
import { Alert, FlatList, TextInput } from 'react-native'
import { Container, Form, HeaderList, PlayersNumb } from './style'
import { RouteParams } from './type'
import { removePlayerByGroup } from '@storage/players/removePlayerByGroup'
import { removeGroupByName } from '@storage/group/removeGroupByName'

export function Players() {
  const [team, setTeam] = useState('time a')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
  const [newPlayer, setNewPlayer] = useState('')
  const newPlayerInputRef = useRef<TextInput>(null)
  const { group } = useRoute().params as RouteParams
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(true)

  async function handleAddPlayer() {
    if (newPlayer.trim().length === 0) {
      Alert.alert('Nova Pessoa', 'Informe um nome!')
    }

    const player = { name: newPlayer, team }

    try {
      await addPlayerByGroup(player, group)
      newPlayerInputRef.current?.blur()
      setNewPlayer('')
      fetchPlayersByTeam()
    } catch (error) {
      if (error instanceof AppError) {
        setNewPlayer('')
        Alert.alert(error.message)
      } else {
        console.log(error)
        setNewPlayer('')
        Alert.alert('Nova Pessoa', 'Não foi possivel adicionar.')
      }
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await removePlayerByGroup(playerName, group)
      fetchPlayersByTeam()
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possivel remover este integrante do time.')
    }
  }

  async function removeGroup() {
    try {
      await removeGroupByName(group)
      navigation.navigate('groups')
    } catch (error) {
      console.log(error)
      Alert.alert('Remover Grupo', 'Não foi possivel remover o grupo.')
    }
  }

  async function handleGroupRemove() {
    Alert.alert('Remover', 'Deseja remover o grupo?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => removeGroup() },
    ])
  }

  async function fetchPlayersByTeam() {
    try {
      setIsLoading(true)
      const playersByTeam = await getPlayersByGroupAndTeam(group, team)
      setPlayers(playersByTeam)
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert(error.message)
      } else {
        console.log(error)
        Alert.alert('Get Players by Team', 'Nao foi possivel pegar jogadores por time.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPlayersByTeam()
  }, [team])

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle='adicione a galera e separe os times' />
      <Form>
        <Input
          inputRef={newPlayerInputRef}
          placeholder='Nome da pessoa'
          autoCorrect={false}
          value={newPlayer}
          onChangeText={setNewPlayer}
          onSubmitEditing={handleAddPlayer}
          returnKeyType='done'
        />
        <ButtonIcon icon='add' onPress={handleAddPlayer} />
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
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => {
                handleRemovePlayer(item.name)
              }}
            />
          )}
          ListEmptyComponent={() => <ListEmpty message='Não há pessoas nessse time.' />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
        />
      )}
      <Button title='Remover turma' variant='SECONDARY' onPress={handleGroupRemove} />
    </Container>
  )
}
