import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header', () => {
  it('renders correctly', () => {
    render(<Header />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
