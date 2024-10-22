// Replace your-renderer with the renderer you are using (e.g., react, vue3)
import type { Preview } from '@storybook/react';

const preview: Preview = {
  //👇 Enables auto-generated documentation for all stories
  tags: ['autodocs'],
};

export default preview;