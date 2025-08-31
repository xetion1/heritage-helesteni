import { render, screen } from '@testing-library/react';
import CompTableSortable from './index';

describe('CompTableSortable', () => {
  it('renders correctly', () => {
    render(<CompTableSortable />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
