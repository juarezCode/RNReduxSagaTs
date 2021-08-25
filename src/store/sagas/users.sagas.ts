import { PayloadAction } from '@reduxjs/toolkit';
import {
  all,
  call,
  delay,
  put,
  select,
  take,
  takeLatest,
} from 'redux-saga/effects';
import { getTodosAPI, getUsersAPI } from '../../api/user.api';
import { CallReturnType } from '../../utils';
import {
  getUsers,
  getUsersError,
  getUsersSuccess,
} from '../actions/users.actions';
import { selectUsers } from '../selectors/users.selectors';

function* getUsersSaga(action: PayloadAction<number>) {
  // console.log('payload', action.payload); // get payload data
  const users: ReturnType<typeof selectUsers> = yield select(selectUsers); // get State
  // console.log('users', users);

  // const users: CallReturnType<typeof getUsersAPI> = yield call(getUsersAPI);
  // const todos: CallReturnType<typeof getTodosAPI> = yield call(
  //   getTodosAPI,
  //   action.payload,
  // );

  yield delay(1000);
  try {
    // parallel
    const { users, todos } = yield all({
      users: call(getUsersAPI),
      todos: call(getTodosAPI, action.payload),
    });
    yield put(getUsersSuccess({ users: users, todos }));
  } catch (error) {
    yield put(getUsersError(error.message));
  }
}

export function* watchGetUsers() {
  yield takeLatest(getUsers, getUsersSaga);
}
