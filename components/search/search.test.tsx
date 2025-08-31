import { render, screen } from '@testing-library/react';
import Search from './index';

describe('Search', () => {
  it('renders correctly', () => {
    render(<Search />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
