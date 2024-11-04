import { render } from '@testing-library/react';

import JsonToCsv from './JsonToCsv';

describe('JsonToCsv', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JsonToCsv />);
    expect(baseElement).toBeTruthy();
  });
});
