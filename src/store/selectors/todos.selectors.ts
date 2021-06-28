import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../reducers';

const selectTodosState = (state: RootState) => state.users;

export const selectTodos = createSelector(
  selectTodosState,
  state => state.todos,
);
