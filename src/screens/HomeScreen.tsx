import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultStackParamList } from '../navigation/navigation.types';
import { getUsers } from '../store/actions/users.actions';
import { selectTodos } from '../store/selectors/todos.selectors';
import {
  selectUsers,
  selectUsersError,
  selectUsersLoading,
} from '../store/selectors/users.selectors';

const HomeScreen: FC<{}> = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const loading = useSelector(selectUsersLoading);
  const todos = useSelector(selectTodos);
  const error = useSelector(selectUsersError);
  const navigation =
    useNavigation<
      StackNavigationProp<DefaultStackParamList, 'HomeScreenName'>
    >();

  useEffect(() => {
    dispatch(getUsers(10));
  }, [, dispatch]);

  if (error) return <Text>{error.toString()}</Text>;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CharactersScreenName')}>
        <Text style={styles.buttonText}>ver personajes de Rick and Morty</Text>
      </TouchableOpacity>
      {loading ? (
        <ActivityIndicator color="black" size="large" />
      ) : (
        <Text style={styles.title}>Usuarios</Text>
      )}
      {users && (
        <FlatList
          data={users}
          keyExtractor={user => user.name.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      )}
      {loading ? (
        <ActivityIndicator color="black" size="large" />
      ) : (
        <Text style={styles.title}>Todos</Text>
      )}
      {todos && (
        <FlatList
          data={todos}
          keyExtractor={todo => todo.title.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'teal',
    height: '5%',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default HomeScreen;
