import { render, screen } from '@testing-library/react';
import CompPagination from './index';

describe('CompPagination', () => {
  it('renders correctly', () => {
    render(<CompPagination />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
