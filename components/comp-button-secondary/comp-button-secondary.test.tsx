import { render, screen } from '@testing-library/react';
import CompButtonSecondary from './index';

describe('CompButtonSecondary', () => {
  it('renders correctly', () => {
    render(<CompButtonSecondary />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
