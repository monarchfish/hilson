import type { Meta, StoryObj } from '@storybook/react';
import { BasicButton } from './BasicButton';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof BasicButton> = {
  component: BasicButton,
  title: 'UI/BasicButton',
  decorators: (Story) => (
    <div style={{ padding: 16 }}>
      <Story />
    </div>
  )
};
export default meta;
type Story = StoryObj<typeof BasicButton>;

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
