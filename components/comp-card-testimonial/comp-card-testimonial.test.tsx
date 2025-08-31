import { render, screen } from '@testing-library/react';
import CompCardTestimonial from './index';

describe('CompCardTestimonial', () => {
  it('renders correctly', () => {
    render(<CompCardTestimonial />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
