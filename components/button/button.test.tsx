import { render, screen } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
