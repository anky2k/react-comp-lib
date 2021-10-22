import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import UiProvider from '../src/components/ui-provider';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(storyFn => <UiProvider>{storyFn()}</UiProvider>);
addDecorator(withInfo({
  inline: true,
  propTablesExclude: [UiProvider]
}));
addDecorator(withKnobs);

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  layout: 'centered'
};
