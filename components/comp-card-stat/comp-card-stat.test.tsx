import { render, screen } from '@testing-library/react';
import CompCardStat from './index';

describe('CompCardStat', () => {
  it('renders correctly', () => {
    render(<CompCardStat />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
