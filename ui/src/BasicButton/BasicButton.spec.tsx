import { render } from '@testing-library/react';

import { BasicButton } from './BasicButton';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BasicButton text={''} variant='contained' />);
    expect(baseElement).toBeTruthy();
  });
});
