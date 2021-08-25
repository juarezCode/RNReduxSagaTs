import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import {
  getCharacterDetailAPI,
  getCharactersAPI,
} from '../../api/rick-and-morty.api';
import { CallReturnType } from '../../utils';
import {
  getCharacter,
  getCharacterError,
  getCharacters,
  getCharactersError,
  getCharactersSuccess,
  getCharacterSuccess,
} from '../actions/character.actions';

function* getCharacterSaga(action: PayloadAction<number>) {
  yield delay(1000);
  try {
    const character: CallReturnType<typeof getCharacterDetailAPI> = yield call(
      getCharacterDetailAPI,
      action.payload,
    );
    yield put(getCharacterSuccess(character));
  } catch (error) {
    yield put(getCharacterError(error.message));
  }
}

function* getCharactersSaga() {
  yield delay(1000);
  try {
    const characters: CallReturnType<typeof getCharactersAPI> = yield call(
      getCharactersAPI,
    );
    yield put(getCharactersSuccess(characters));
  } catch (error) {
    yield put(getCharactersError(error.message));
  }
}

export function* watchGetCharacters() {
  yield takeLatest(getCharacters, getCharactersSaga);
}

export function* watchGetCharacter() {
  yield takeLatest(getCharacter, getCharacterSaga);
}
