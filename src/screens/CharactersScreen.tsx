import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultStackParamList } from '../navigation/navigation.types';
import { getCharacters } from '../store/actions/character.actions';
import {
  selectCharacters,
  selectCharactersError,
  selectCharactersLoading,
} from '../store/selectors/rick-and-morty.selectors';

type props = {
  navigation: StackNavigationProp<
    DefaultStackParamList,
    'CharactersScreenName'
  >;
};

const CharactersScreen: FC<props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharacters);
  const loading = useSelector(selectCharactersLoading);
  const error = useSelector(selectCharactersError);

  useEffect(() => {
    dispatch(getCharacters());
  }, [, dispatch]);

  return (
    <View style={styles.screen}>
      {error && <Text style={styles.title}>{error}</Text>}
      {loading ? (
        <ActivityIndicator color="black" size="large" />
      ) : (
        <Text style={styles.title}>characters</Text>
      )}
      {characters.length > 0 && (
        <FlatList
          data={characters}
          numColumns={3}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CharacterScreenName', {
                  characterId: item.id,
                })
              }
              style={styles.card}>
              <Image
                source={{ uri: item.image }}
                style={{ width: '100%', height: 100 }}
              />
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    color: 'black',
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  card: {
    flex: 0.33,
    alignItems: 'center',
    borderRadius: 8,
    margin: 5,
    backgroundColor: 'teal',
    color: 'white',
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});

export default CharactersScreen;
