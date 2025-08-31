import { render, screen } from '@testing-library/react';
import Testimonial from './index';

describe('Testimonial', () => {
  it('renders correctly', () => {
    render(<Testimonial />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
