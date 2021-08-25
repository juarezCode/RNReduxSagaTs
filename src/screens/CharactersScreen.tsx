import React, { FC, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import CharacterItem from '../components/CharacterItem';
import { DefaultStackParamList } from '../navigation/navigation.types';
import { getCharacters } from '../store/actions/character.actions';
import { selectCharactersState } from '../store/selectors/rick-and-morty.selectors';

type props = {
  navigation: StackNavigationProp<
    DefaultStackParamList,
    'CharactersScreenName'
  >;
};

const CharactersScreen: FC<props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { characters, loading, error } = useSelector(selectCharactersState);

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
            <CharacterItem
              character={item}
              navigateTo={() =>
                navigation.navigate('CharacterScreenName', {
                  characterId: item.id,
                })
              }
            />
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
});

export default CharactersScreen;
