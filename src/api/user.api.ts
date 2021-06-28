import axios from 'axios';
import { Todo } from '../types/todo';
import { User } from '../types/user';
const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsersAPI = async (): Promise<User[]> => {
  const { data } = await axios.get<User[]>(`${BASE_URL}/users`);
  return data;
};

export const getTodosAPI = async (userId: number): Promise<Todo[]> => {
  const { data } = await axios.get<Todo[]>(`${BASE_URL}/todos`, {
    params: {
      userId,
    },
  });
  return data;
};
