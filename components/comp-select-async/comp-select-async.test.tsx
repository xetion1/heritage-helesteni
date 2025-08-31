import { render, screen } from '@testing-library/react';
import CompSelectAsync from './index';

describe('CompSelectAsync', () => {
  it('renders correctly', () => {
    render(<CompSelectAsync />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
