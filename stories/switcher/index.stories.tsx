import React from 'react';
import { Meta, Story } from '@storybook/react';
import Switcher from '../../src/components/switcher';

const meta: Meta = {
  title: 'Switcher',
  component: Switcher,
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

const Template: Story = () => (
  <div>
    <Switcher />
    <br/>
    <br/>
    <label className="text-purple-800 font-bold dark:text-pink-800">{'Try and change the theme'}</label>
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const SwitcherStory = Template.bind({});

SwitcherStory.args = {};
