import { render } from '@testing-library/react';

import BasicCheckbox from './BasicCheckbox';

describe('BasicCheckbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BasicCheckbox />);
    expect(baseElement).toBeTruthy();
  });
});
