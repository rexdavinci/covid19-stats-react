import React from 'react';
import { render } from '@testing-library/react';
import State from './State';

test('renders learn react link', () => {
  const { getByText } = render(<State />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
