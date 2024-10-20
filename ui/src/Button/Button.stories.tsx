import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'UI/Button',
  decorators: (Story) => (
    <div style={{ padding: 16 }}>
        <Story />
    </div>
  )
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary = {
  args: {
    text: 'Primary'
  },
};

export const Heading: Story = {
  args: {
    text: 'Heading'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to MyButton!/gi)).toBeTruthy();
  },
};