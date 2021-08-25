import { combineReducers } from 'redux';
import { characterReducer } from './character.reducer';
import { charactersReducer } from './characters.reducer';
import { usersReducer } from './users.reducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  characters: charactersReducer,
  character: characterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
