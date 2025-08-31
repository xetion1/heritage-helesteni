import { render, screen } from '@testing-library/react';
import CompCarousel from './index';

describe('CompCarousel', () => {
  it('renders correctly', () => {
    render(<CompCarousel />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
