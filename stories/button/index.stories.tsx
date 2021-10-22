import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonTypes } from '../../src/components/button';
import { text, boolean } from '@storybook/addon-knobs';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        onClick: { action: 'clicked' },
        label: 'text',
        outlined: 'boolean'
      }
    }
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

/**
 * https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * Using args, Refine this pattern by defining a master template for a component’s stories that allows you to pass in args.
 * This reduces the unique code you’ll need to write and maintain for each story.
 *
  // Button.stories.js | Button.stories.jsx

  //👇 We create a “template” of how args map to rendering
  const Template = (args) => <Button {...args} />;

  //👇 Each story then reuses that template
  export const Primary = Template.bind({});
  Primary.args = { background: '#ff0', label: 'Button' };

  export const Secondary = Template.bind({});
  Secondary.args = { ...Primary.args, label: '😄👍😍💯' };

  export const Tertiary = Template.bind({});
  Tertiary.args = { ...Primary.args, label: '📚📕📈🤓' };
 */

const Template: Story<ButtonTypes> = args => <Button
  outlined={boolean('OutLined', false)}
  label={text('Label', ' Submit')}
  onClick={() => true}
  {...args}
/>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const ButtonStory = Template.bind({});

ButtonStory.args = {};
