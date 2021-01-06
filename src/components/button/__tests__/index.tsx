import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Button from '../../button';

afterEach(cleanup);

test('it should render correctly with outlined true option', () => {
  const clickHandler = jest.fn();
  const { getByText } = render(
    <Button outlined onClick={clickHandler} label="Submit" />
  );
  expect(getByText('Submit')).toBeInTheDocument();
  fireEvent.click(getByText('Submit'));
  expect(clickHandler).toHaveBeenCalled();
});

test('it should render correctly with outlined false option', () => {
  const clickHandler = jest.fn();
  const { getByText } = render(
    <Button onClick={clickHandler} label="Submit" />
  );

  expect(getByText('Submit')).toBeInTheDocument();

  fireEvent.click(getByText('Submit'));
  expect(clickHandler).toHaveBeenCalled();
});

test('it should render correctly without label', () => {
  const clickHandler = jest.fn();
  const { getByText } = render(<Button onClick={clickHandler} />);

  expect(getByText('Some label')).toBeInTheDocument();

  fireEvent.click(getByText('Some label'));
  expect(clickHandler).toHaveBeenCalled();
});

test('it should render as per given styles', () => {
  const clickHandler = jest.fn();

  const { asFragment } = render(
    <Button onClick={clickHandler} label="Submit" />
  );

  expect(asFragment()).toMatchSnapshot();
});
