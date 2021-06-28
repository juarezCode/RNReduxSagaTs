import { createAction } from '@reduxjs/toolkit';
import { Todo } from '../../types/todo';
import { User } from '../../types/user';
import { withPayloadType } from '../../utils';

export const getUsers = createAction(
  '[Users] Get Users',
  withPayloadType<number>(),
);

export const getUsersSuccess = createAction(
  '[Users] Get Users Success',
  withPayloadType<{ users: User[]; todos: Todo[] }>(),
);

export const getUsersError = createAction(
  '[Users] Get Users Error',
  withPayloadType<any>(),
);
