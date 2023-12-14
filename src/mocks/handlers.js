import { http } from 'msw';

export const handlers = [
  // put with payload
  http.put('https://jsonplaceholder.typicode.com/posts/1', () => {
    return new Response('Hello world!');
  }),

  // put without payload
  http.put('https://jsonplaceholder.typicode.com/posts/2', () => {
    return new Response('Hello world!');
  }),
];
