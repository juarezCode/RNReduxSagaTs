import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../reducers';

const selectUsersState = (state: RootState) => state.users;

export const selectUsers = createSelector(
  selectUsersState,
  state => state.users,
);

export const selectUsersLoading = createSelector(
  selectUsersState,
  state => state.loading,
);

export const selectUsersError = createSelector(
  selectUsersState,
  state => state.error,
);
