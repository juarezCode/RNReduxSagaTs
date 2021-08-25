import { createAction } from '@reduxjs/toolkit';
import { Character } from '../../types/character';
import { withPayloadType } from '../../utils';

export const getCharacters = createAction('[Rick] Get Characters');

export const getCharactersSuccess = createAction(
  '[Rick] Get Characters Success',
  withPayloadType<Character[]>(),
);

export const getCharactersError = createAction(
  '[Rick] Get Characters Error',
  withPayloadType<any>(),
);

export const getCharacter = createAction(
  '[Rick] Get Character',
  withPayloadType<number>(),
);

export const getCharacterSuccess = createAction(
  '[Rick] Get Character Success',
  withPayloadType<Character>(),
);

export const getCharacterError = createAction(
  '[Rick] Get Character Error',
  withPayloadType<any>(),
);
