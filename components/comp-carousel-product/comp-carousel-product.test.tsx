import { render, screen } from '@testing-library/react';
import CompCarouselProduct from './index';

describe('CompCarouselProduct', () => {
  it('renders correctly', () => {
    render(<CompCarouselProduct />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
