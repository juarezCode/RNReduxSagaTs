import { all, fork } from 'redux-saga/effects';
import { watchGetUsers } from './users.sagas';

export default function* rootSaga() {
  yield all([fork(watchGetUsers)]);
}
