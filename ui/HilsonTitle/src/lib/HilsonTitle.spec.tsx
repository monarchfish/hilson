import { render } from '@testing-library/react';

import HilsonTitle from './HilsonTitle';

describe('HilsonTitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HilsonTitle />);
    expect(baseElement).toBeTruthy();
  });
});
