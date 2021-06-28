import { createReducer } from '@reduxjs/toolkit';
import { Todo } from '../../types/todo';
import { User } from '../../types/user';
import {
  getUsers,
  getUsersError,
  getUsersSuccess,
} from '../actions/users.actions';

export type UsersState = {
  loading: boolean;
  users: User[];
  todos: Todo[];
  error: any;
};

const initialState: UsersState = {
  loading: false,
  users: [],
  todos: [],
  error: null,
};

export const usersReducer = createReducer<UsersState>(initialState, builder => {
  return builder
    .addCase(getUsers, state => {
      state.loading = true;
      state.users = [];
    })
    .addCase(getUsersSuccess, (state, { payload: { users, todos } }) => {
      state.loading = false;
      state.users = users;
      state.todos = todos;
    })
    .addCase(getUsersError, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
});
