import { createReducer } from '@reduxjs/toolkit';
import { Character } from '../../types/character';
import {
  getCharacters,
  getCharactersError,
  getCharactersSuccess,
} from '../actions/character.actions';

export type CharactersState = {
  loading: boolean;
  characters: Character[];
  error: any;
};

const initialState: CharactersState = {
  loading: false,
  characters: [],
  error: null,
};

export const charactersReducer = createReducer<CharactersState>(
  initialState,
  builder => {
    return builder
      .addCase(getCharacters, state => {
        state.loading = true;
        state.characters = [];
        state.error = null;
      })
      .addCase(getCharactersSuccess, (state, { payload }) => {
        state.loading = false;
        state.characters = payload;
      })
      .addCase(getCharactersError, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
);
