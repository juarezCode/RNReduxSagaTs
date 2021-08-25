import axios from 'axios';
import { Character, CharacterResponse } from '../types/character';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharactersAPI = async (): Promise<Character[]> => {
  const { data } = await axios.get<CharacterResponse>(`${BASE_URL}/character`);
  return data.results;
};

export const getCharacterDetailAPI = async (id: number): Promise<Character> => {
  const { data } = await axios.get<Character>(`${BASE_URL}/character/${id}`);
  return data;
};
