import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('mon premier test', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Le Codid 19 c'est pas top!!!/i);
  expect(linkElement).toBeInTheDocument();
});
