import { render, screen } from '@testing-library/react';
import ThemeToggle from './index';

describe('ThemeToggle', () => {
  it('renders correctly', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
