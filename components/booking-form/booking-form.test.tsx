import { render, screen } from '@testing-library/react';
import BookingForm from './index';

describe('BookingForm', () => {
  it('renders correctly', () => {
    render(<BookingForm />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
