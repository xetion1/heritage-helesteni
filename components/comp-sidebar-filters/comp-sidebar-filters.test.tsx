import { render, screen } from '@testing-library/react';
import CompSidebarFilters from './index';

describe('CompSidebarFilters', () => {
  it('renders correctly', () => {
    render(<CompSidebarFilters />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
