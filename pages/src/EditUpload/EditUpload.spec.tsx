import { render } from '@testing-library/react';

import EditUpload from './EditUpload';

describe('EditUpload', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EditUpload />);
    expect(baseElement).toBeTruthy();
  });
});
