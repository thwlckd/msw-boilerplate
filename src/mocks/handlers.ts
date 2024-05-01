import { http, HttpResponse } from 'msw';
import { users } from './data/user';

export const handlers = [
  http.get(`${import.meta.env.VITE_SOME_KEY}/users`, () => {
    return HttpResponse.json(users);
  }),
];
