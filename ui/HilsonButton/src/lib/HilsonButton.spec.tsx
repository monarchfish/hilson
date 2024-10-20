import { render } from '@testing-library/react';

import HilsonButton from './HilsonButton';

describe('HilsonButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HilsonButton />);
    expect(baseElement).toBeTruthy();
  });
});
