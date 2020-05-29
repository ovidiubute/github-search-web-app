import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders search box', () => {
  const { getByPlaceholderText } = render(<App />);
  const searchElement = getByPlaceholderText(/search GitHub/i);
  expect(searchElement).toBeInTheDocument();
});
