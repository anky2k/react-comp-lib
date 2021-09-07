import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { cleanup, fireEvent, render } from '@testing-library/react';
import useTheme from '../theme-provider';
import UiProvider from '../../components/ui-provider';

// Mock window.matchMedia
import 'mock-match-media/polyfill';

import { setMedia } from 'mock-match-media';

const TestComponent = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <>
      <button data-testid="test-theme-switch" onClick={toggleTheme}></button>
      <label data-testid="current-theme">{theme}</label>
    </>
  );
};

const RenderWithTheme = () => (
  <UiProvider>
    <TestComponent />
  </UiProvider>
);

afterEach(() => {
  cleanup();
});

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
  const { getByTestId } = render(<RenderWithTheme />);
  fireEvent.click(getByTestId('test-theme-switch'));
  expect(getByTestId('current-theme').innerHTML).toEqual('dark');
});

it('should load theme basis users preferred color scheme', () => {
  setMedia({
    'prefers-color-scheme': 'dark'
  });
  const { getByTestId } = render(<RenderWithTheme />);
  expect(getByTestId('current-theme').innerHTML).toEqual('dark');
});
