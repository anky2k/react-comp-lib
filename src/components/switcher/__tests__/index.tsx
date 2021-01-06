import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Switcher from '../../switcher';
import UiProvider from '../../ui-provider';

afterEach(cleanup);

test('it should render as per given styles', () => {
  const { asFragment } = render(<Switcher />);

  expect(asFragment()).toMatchSnapshot();
});

test('it should toggle to a different theme mode', () => {
  const { getByTestId, getByTitle } = render(
    <UiProvider>
      <Switcher />
    </UiProvider>
  );
  fireEvent.click(getByTestId('astra-theme-switch'));
  expect(getByTitle('switch to light mode')).toBeInTheDocument();
  fireEvent.click(getByTestId('astra-theme-switch'));
  expect(getByTitle('switch to dark mode')).toBeInTheDocument();
});
