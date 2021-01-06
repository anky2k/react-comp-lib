import React from 'react';
import { render, cleanup } from '@testing-library/react';
import UiProvider from '../../ui-provider';

afterEach(cleanup);

test('it should render as per given styles', () => {
  const { asFragment } = render(<UiProvider />);

  expect(asFragment()).toMatchSnapshot();
});

test('it should render the theme container', () => {
  const { getByTestId } = render(<UiProvider />);
  expect(getByTestId('astra-theme-container')).toBeInTheDocument();
});
