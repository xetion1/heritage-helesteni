import { render, screen } from '@testing-library/react';
import CompTablePaginated from './index';

describe('CompTablePaginated', () => {
  it('renders correctly', () => {
    render(<CompTablePaginated />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
