import { render, screen } from '@testing-library/react';
import CompTooltip from './index';

describe('CompTooltip', () => {
  it('renders correctly', () => {
    render(<CompTooltip />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
