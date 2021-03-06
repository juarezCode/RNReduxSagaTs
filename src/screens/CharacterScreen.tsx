import { StackScreenProps } from '@react-navigation/stack';
import React, { FC, useEffect } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultStackParamList } from '../navigation/navigation.types';
import { getCharacter } from '../store/actions/character.actions';
import { selectCharacterState } from '../store/selectors/rick-and-morty.selectors';

// type props = {
//   navigation: CharacterScreenNavigationProp;
//   route: CharacterScreenRouteProp;
// };

// esto es lo mismo que declarar navigation y route aparte, como arriba
type props = StackScreenProps<DefaultStackParamList, 'CharacterScreenName'>;

const CharacterScreen: FC<props> = ({ navigation, route: { params } }) => {
  const dispatch = useDispatch();

  const { character, loading } = useSelector(selectCharacterState);

  useEffect(() => {
    dispatch(getCharacter(params.characterId));
  }, [dispatch]);

  return (
    <View style={{ flex: 1 }}>
      {loading && <ActivityIndicator size="large" color="black" />}
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {character && (
          <View style={{ width: '100%' }}>
            <Image source={{ uri: character.image }} style={styles.image} />
            <View style={styles.body}>
              <Text style={styles.text}>name: {character.name}</Text>
              <Text style={styles.text}>status: {character.status}</Text>
              <Text style={styles.text}>species: {character.species}</Text>
              <Text style={styles.text}>gender: {character.gender}</Text>
              <Text style={styles.text}>origin: {character.origin.name}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
  },
  body: {
    padding: 10,
    flex: 1,
  },
  text: {
    color: 'teal',
    fontSize: 20,
  },
});

export default CharacterScreen;
