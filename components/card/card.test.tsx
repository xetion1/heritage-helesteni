import { render, screen } from '@testing-library/react';
import Card from './index';

describe('Card', () => {
  it('renders correctly', () => {
    render(<Card />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
