import { delay, http, HttpResponse } from 'msw';
import { users } from './data/user';

export const handlers = [
  http.get(`${import.meta.env.VITE_SERVER_BASE_URL}/users`, () => {
    return HttpResponse.json(users);
  }),
  http.get(`${import.meta.env.VITE_SERVER_BASE_URL}/delay-users`, async () => {
    await delay(5000);

    return HttpResponse.json(users);
  }),
];
