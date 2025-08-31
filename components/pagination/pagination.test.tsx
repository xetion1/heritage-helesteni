import { render, screen } from '@testing-library/react';
import Pagination from './index';

describe('Pagination', () => {
  it('renders correctly', () => {
    render(<Pagination />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
