import { render, screen } from '@testing-library/react';
import Navigation from './index';

describe('Navigation', () => {
  it('renders correctly', () => {
    render(<Navigation />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
