import { render, screen } from '@testing-library/react';
import ContactForm from './index';

describe('ContactForm', () => {
  it('renders correctly', () => {
    render(<ContactForm />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
