import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type DefaultStackParamList = {
  HomeScreenName: undefined;
  CharactersScreenName: undefined;
  CharacterScreenName: {
    characterId: number;
  };
};

export type CharacterScreenRouteProp = RouteProp<
  DefaultStackParamList,
  'CharacterScreenName'
>;

export type CharacterScreenNavigationProp = StackNavigationProp<
  DefaultStackParamList,
  'CharacterScreenName'
>;
