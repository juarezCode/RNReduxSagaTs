import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../reducers';

export const selectCharactersState = (state: RootState) => state.characters;

export const selectCharacterState = (state: RootState) => state.character;

export const selectCharacters = createSelector(
  selectCharactersState,
  state => state.characters,
);

export const selectCharactersLoading = createSelector(
  selectCharactersState,
  state => state.loading,
);

export const selectCharactersError = createSelector(
  selectCharactersState,
  state => state.error,
);

export const selectCharacter = createSelector(
  selectCharacterState,
  state => state.character,
);

export const selectCharacterLoading = createSelector(
  selectCharacterState,
  state => state.loading,
);

export const selectCharacterError = createSelector(
  selectCharacterState,
  state => state.error,
);
