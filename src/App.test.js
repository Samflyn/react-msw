import { render, screen } from '@testing-library/react';
import App from './App';
import { server } from './mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders learn react link', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Tests with msw handler/i);
  expect(linkElement).toBeInTheDocument();
});
