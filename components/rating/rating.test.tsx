import { render, screen } from '@testing-library/react';
import Rating from './index';

describe('Rating', () => {
  it('renders correctly', () => {
    render(<Rating />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
