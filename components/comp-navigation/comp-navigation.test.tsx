import { render, screen } from '@testing-library/react';
import CompNavigation from './index';

describe('CompNavigation', () => {
  it('renders correctly', () => {
    render(<CompNavigation />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
