import { render, screen } from '@testing-library/react';
import Filter from './index';

describe('Filter', () => {
  it('renders correctly', () => {
    render(<Filter />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
