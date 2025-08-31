import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Footer', () => {
  it('renders correctly', () => {
    render(<Footer />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
