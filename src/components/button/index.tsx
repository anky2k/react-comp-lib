import React, { FC } from 'react';

export type ButtonTypes = {
  /**
   * Label of the button
   */

  label?: string;
  /**
   * Boolean value to define the button style
   */

  outlined?: boolean;
  /**
   * Button click action
   */

  onClick: (event: React.MouseEvent) => void;
};

const BASE_BUTTON =
  'rounded outline-none shadow py-3 px-12 font-normal uppercase tracking-wider text-lg';
const CONTAINED_BUTTON = `${BASE_BUTTON} bg-purple-600 border border-purple-600 text-white`;
const OUTLINED_BUTTON = `${BASE_BUTTON} border border-purple-600 text-purple-600`;

const Button: FC<ButtonTypes> = ({
  label = 'Some label',
  outlined,
  onClick
}) => (
  <button
    className={outlined ? OUTLINED_BUTTON : CONTAINED_BUTTON}
    onClick={(e) => {
      onClick(e);
    }}
  >
    <span>{label}</span>
  </button>
);

export default Button;
