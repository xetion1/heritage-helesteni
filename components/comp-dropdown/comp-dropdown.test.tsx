import { render, screen } from '@testing-library/react';
import CompDropdown from './index';

describe('CompDropdown', () => {
  it('renders correctly', () => {
    render(<CompDropdown />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
