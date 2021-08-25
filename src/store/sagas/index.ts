import { all, fork } from 'redux-saga/effects';
import { watchGetCharacter, watchGetCharacters } from './rick-and-morty.sagas';
import { watchGetUsers } from './users.sagas';

export default function* rootSaga() {
  yield all([
    fork(watchGetUsers),
    fork(watchGetCharacters),
    fork(watchGetCharacter),
  ]);
}
