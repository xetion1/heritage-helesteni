import { render, screen } from '@testing-library/react';
import CompButtonPrimary from './index';

describe('CompButtonPrimary', () => {
  it('renders correctly', () => {
    render(<CompButtonPrimary />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
