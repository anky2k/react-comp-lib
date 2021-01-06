import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { cleanup, fireEvent, render } from '@testing-library/react';
import useTheme from '../theme-provider';
import UiProvider from '../../components/ui-provider';

afterEach(cleanup);
it('should be a function', () => {
  expect(useTheme).toBeDefined();
});

it('should return an object', () => {
  const { result } = renderHook(() => useTheme());
  expect(result.current).toBeDefined();
});

it('should have props of current theme and toggle theme', () => {
  const { result } = renderHook(() => useTheme());
  expect(result.current.theme).toBeDefined();
  expect(result.current.toggleTheme).toBeDefined();
});

it('should by default it should have a light theme', () => {
  const { result } = renderHook(() => useTheme());
  expect(result.current.theme).toEqual('light');
});

it('should allow to use toggle function to change the theme', () => {
  const TestComponent = () => {
    const { toggleTheme, theme } = useTheme();
    return (
      <>
        <button data-testid="test-theme-switch" onClick={toggleTheme}></button>
        <label data-testid="current-theme">{theme}</label>
      </>
    );
  };
  const { getByTestId } = render(
    <UiProvider>
      <TestComponent />
    </UiProvider>
  );
  fireEvent.click(getByTestId('test-theme-switch'));
  expect(getByTestId('current-theme').innerHTML).toEqual('dark');
});
