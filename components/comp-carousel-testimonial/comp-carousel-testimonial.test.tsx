import { render, screen } from '@testing-library/react';
import CompCarouselTestimonial from './index';

describe('CompCarouselTestimonial', () => {
  it('renders correctly', () => {
    render(<CompCarouselTestimonial />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
