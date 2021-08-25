import { createReducer } from '@reduxjs/toolkit';
import { Character } from '../../types/character';
import {
  getCharacter,
  getCharacterError,
  getCharacterSuccess,
} from '../actions/character.actions';

export type CharacterState = {
  loading: boolean;
  character: Character | null;
  error: any;
};

const initialState: CharacterState = {
  loading: false,
  character: null,
  error: null,
};

export const characterReducer = createReducer<CharacterState>(
  initialState,
  builder => {
    return builder
      .addCase(getCharacter, state => {
        state.loading = true;
        state.character = null;
      })
      .addCase(getCharacterSuccess, (state, { payload }) => {
        state.loading = false;
        state.character = payload;
      })
      .addCase(getCharacterError, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
);
