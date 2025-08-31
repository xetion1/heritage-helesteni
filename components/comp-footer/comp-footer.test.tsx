import { render, screen } from '@testing-library/react';
import CompFooter from './index';

describe('CompFooter', () => {
  it('renders correctly', () => {
    render(<CompFooter />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
