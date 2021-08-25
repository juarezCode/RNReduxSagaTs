import React, { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Character } from '../types/character';

type props = {
  character: Character;
  navigateTo: () => void;
};

const CharacterItem: FC<props> = ({ character, navigateTo }) => {
  return (
    <TouchableOpacity onPress={navigateTo} style={styles.card}>
      <Image
        source={{ uri: character.image }}
        style={{ width: '100%', height: 100 }}
      />
      <Text style={styles.text}>{character.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default CharacterItem;
