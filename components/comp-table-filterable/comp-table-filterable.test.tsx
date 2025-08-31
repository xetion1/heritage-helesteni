import { render, screen } from '@testing-library/react';
import CompTableFilterable from './index';

describe('CompTableFilterable', () => {
  it('renders correctly', () => {
    render(<CompTableFilterable />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
